import { generateUrl } from '$lib/client/utils/generateUrl';
import fs from 'fs/promises'; // Use import for promises
import { pageRef } from './quran/pageRef';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


async function downloadQuranPage(page: number) {
  const url = generateUrl(pageRef, page);
  const fileName = `page${page}.json`; // Clear and consistent naming
  // Construct file path using import.meta.url

  const filePath = path.join(__dirname, './quran/pages/', fileName);



  // await fs.writeFile(filePath, JSON.stringify({}, null, 2), 'utf8'); // Write formatted JSON


  try {
    const response = await fetch(url, {
      rejectUnauthorized: false, // Disabling SSL/TLS verification (not recommended)
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch page ${page}: ${response.statusText}`);
    }

    const jsonData = await response.json(); // Parse JSON response

    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8'); // Write formatted JSON
    console.log(`Downloaded page ${page} to ${filePath}`);
  } catch (error) {
    console.error(`Error downloading page ${page}:`, error);
  }
}

export const getData = async () => {
  for (let page = 1; page <= 604; page++) {
    await downloadQuranPage(page);
  }
}

// Alternative using async/await loop (optional):
// (async function () {
//   for (let page = 1; page <= 604; page++) {
//     await downloadQuranPage(page);
//   }
// })();