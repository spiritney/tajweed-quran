import fs from 'fs/promises'; // Use import for promises
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


async function downloadQuranSurah(surahNumber: number) {
  const url = `https://surahquran.com/qaloon/${surahNumber}.` + "html";

  try {
    const response = await fetch(url, {
      // @ts-ignore
      rejectUnauthorized: false, // Disabling SSL/TLS verification (not recommended)
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch surahNumber ${surahNumber}: ${response.statusText}`);
    }

    let extractedText = ""

    const html = await response.text();

    let startIndex = html.indexOf('class="quran"'); // Find the starting index of the first `<p>` tag
    let endIndex = html.indexOf('<a id="riwayat"', startIndex + 3); // Find the ending index of the first `</p>` tag (offset by 3 to skip the opening `<p>` tag)

    if (startIndex !== -1 && endIndex !== -1) {

      extractedText = html.substring(startIndex + 3, endIndex)

      if (surahNumber === 1) {
        // extractedText = extractedText.replaceAll("<br>", "")
        extractedText = extractedText.split("<br>")[2].trim().replaceAll("<br />\n", "\n")
        // console.log(extractedText);
      } else if (surahNumber === 9) {
        // extractedText = extractedText.replaceAll("<br>", "")
        extractedText = extractedText.split("\n\n")[2].trim()
        // console.log(extractedText);
      } else {
        if (!extractedText) throw Error("error 1");
        extractedText = extractedText.trim().trim()
        if (!extractedText) throw Error("error 2");
        extractedText = extractedText.split("</p>")[1]
        if (!extractedText) throw Error("error 3");
        extractedText = extractedText.trim().trim()
        if (!extractedText) throw Error("error 4");
        extractedText = extractedText.trim().replaceAll("<br>", "")
        if (!extractedText) throw Error("error 5");

        const lines = extractedText.split(/\r?\n/);

        // Remove the last character (newline) from each line, if it exists
        for (let i = 0; i < lines.length; i++) {
          lines[i] = lines[i].slice(0, -1).trim();
        }

        // Join the lines back into a single string
        extractedText = lines.join("\n").replaceAll("\n\n\n\n\n", "").replaceAll("\n\n\n\n", "").replaceAll("\n\n\n", "");

        //.replaceAll("\n","").split("<br>")[2].split("<br />"); // Extract text between tags (offset by 3 to skip opening `<p>` and closing `</p>`)
      }

    } else {
      console.warn('No paragraph found within the fetched HTML');
    }

    const filePath = path.join(__dirname, './quran/text/', `${surahNumber}.txt`);

    await fs.writeFile(filePath, JSON.stringify(extractedText, null, 2), 'utf8');



    // extractedText.split("\n\n").forEach(async (item, i) => {
    //   console.log(item);
    //   const filePath = path.join(__dirname, './quran/surahNumbers2/', `surahNumber${surahNumber + i}.json`);
    //   await fs.writeFile(filePath, JSON.stringify(item.trim().split("\n"), null, 2), 'utf8');
    //   console.log(`Downloaded surahNumber ${surahNumber} to ${filePath}`);
    // });


  } catch (error) {
    console.error(`Error downloading surahNumber ${surahNumber}:`, error);
  }
}

export const getDataAsText = async () => {

  for (let surahNumber = 1; surahNumber <= 114; surahNumber++) {
    await downloadQuranSurah(surahNumber);
  }
}
