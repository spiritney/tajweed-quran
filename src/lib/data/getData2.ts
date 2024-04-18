import fs from 'fs/promises'; // Use import for promises
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


async function downloadQuranPage(page: number) {
  const url = `https://surahquran.com/qaloon/${page}.html`;
  const fileName = `page${page}.json`; // Clear and consistent naming
  // Construct file path using import.meta.url

  const filePath = path.join(__dirname, './quran/pages2/', fileName);



  // await fs.writeFile(filePath, JSON.stringify({}, null, 2), 'utf8'); // Write formatted JSON


  try {
    const response = await fetch(url, {
      rejectUnauthorized: false, // Disabling SSL/TLS verification (not recommended)
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch page ${page}: ${response.statusText}`);
    }

    let extractedText = ""

    const html = await response.text();

    const startIndex = html.indexOf('class="quran"'); // Find the starting index of the first `<p>` tag
    const endIndex = html.indexOf('<a id="riwayat"', startIndex + 3); // Find the ending index of the first `</p>` tag (offset by 3 to skip the opening `<p>` tag)

    if (startIndex !== -1 && endIndex !== -1) {
      extractedText = html.substring(startIndex + 3, endIndex).trim()
      extractedText = extractedText.trim().split("</p>")[1]
      extractedText = extractedText.trim().replaceAll("<br>", "")

      const lines = extractedText.split(/\r?\n/);

      // Remove the last character (newline) from each line, if it exists
      for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].slice(0, -1);
      }

      // Join the lines back into a single string
      extractedText = lines.join("\n").replaceAll("\n\n\n\n\n", "").replaceAll("\n\n\n\n", "").replaceAll("\n\n\n", "");

      //.replaceAll("\n","").split("<br>")[2].split("<br />"); // Extract text between tags (offset by 3 to skip opening `<p>` and closing `</p>`)
    } else {
      console.warn('No paragraph found within the fetched HTML');
    }


    extractedText.split("\n\n").forEach(async (item, i) => {
      console.log(item);
     await fs.writeFile(path.join(__dirname, './quran/pages2/', `page${page + i}.json`), JSON.stringify(item.trim().split("\n"), null, 2), 'utf8');
    });



    console.log(`Downloaded page ${page} to ${filePath}`);
  } catch (error) {
    console.error(`Error downloading page ${page}:`, error);
  }
}

export const getData2 = async () => {
  for (let page = 2; page <= 10; page++) {
    await downloadQuranPage(page);
  }
}

// Alternative using async/await loop (optional):
// (async function () {
//   for (let page = 1; page <= 604; page++) {
//     await downloadQuranPage(page);
//   }
// })();