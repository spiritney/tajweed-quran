import fs from 'fs/promises'; // Use import for promises
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const numCache = path.join(__dirname, './quran/', `.cache.num`)

export const transformSuratTextToPages = async () => {
  await writeNumberToFile(numCache, Number(1));

  for (let surahNumber = 1; surahNumber <= 114; surahNumber++) {
    await (async (surahNumber: number) => {

      const pageNumber = await readNumberFromFile(numCache) || 1

      const filePath = path.join(__dirname, './quran/text/', `${surahNumber}.txt`);

      const surahText = await fs.readFile(filePath, 'utf8');

      const pages = JSON.parse(surahText).split("\n\n")
      // Update pageNumber before processing the next page
      await writeNumberToFile(numCache, Number(pageNumber + pages.length));


      pages.forEach(async (item: any, index: number) => {
        const textToSaveAsPage = JSON.stringify(item.trim().split("\n"), null, 2);
        const userPageNumber = pageNumber + index

        console.log(`---- Page N°${userPageNumber}`);

        const filePath = path.join(__dirname, './quran/pages/', `page${userPageNumber}.json`);
        await fs.writeFile(filePath, textToSaveAsPage, 'utf8');


      });

      // Return the updated page number after processing all pages
    })(surahNumber);
  }
};



async function writeNumberToFile(filePath: string, numberToWrite: number): Promise<void> {
  try {
    const data = JSON.stringify(numberToWrite);
    await fs.writeFile(filePath, data, 'utf8');
  } catch (error) {
    console.error("Error writing number to file:", error);
  }
}



async function readNumberFromFile(filePath: string): Promise<number | null> {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return parseInt(data, 10);
  } catch (error) {
    console.error("Error reading number from file:", error);
    return null;
  }
}