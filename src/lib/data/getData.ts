import { generateUrl } from '$lib/client/utils/generateUrl';
import fs from 'fs/promises'; // Use import for promises
import path from 'path';
import { pageRef } from './quran/pageRef';


const basePath = path.resolve(__dirname, '..'); // Define base path relative to getData.js

async function downloadQuranPage(page: number) {
  const url = generateUrl(pageRef, page);
  const fileName = `${page}.json`; // Clear and consistent naming
  const filePath = path.join(basePath, 'data/quran/pages', fileName);

  try {
    const response = await fetch(url); // Use fetch for HTTP requests
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
  for (let page = 1; page <= 3; page++) {
    await downloadQuranPage(page);
  }
}

// Alternative using async/await loop (optional):
// (async function () {
//   for (let page = 1; page <= 604; page++) {
//     await downloadQuranPage(page);
//   }
// })();