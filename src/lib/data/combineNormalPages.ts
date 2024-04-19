import fs from 'fs/promises';
import path from 'path';
import mappers from "$lib/data/quran/mappers.json";
import { directoryPath, directoryToPagePath } from '$lib/constants';
import { combineTwoPagesInOne } from './combineTwoPagesInOne';

export const combineNormalPages = async () => {
    try {
        // Get a list of file names
        const fileNames = await fs.readdir(directoryPath);
        // Sort file names naturally (considering leading zeros)
        fileNames.sort((a, b) => {
            return a.localeCompare(b, undefined, { numeric: true });
        });

        let flagCounter = 0;
        // Loop through file names with index
        for (let index = 0; index < fileNames.length; index++) {
            console.log(`flagCounter: ${flagCounter}`);


            const fileName = fileNames[index];
            // Check if the file is a JSON file
            if (fileNames[index].endsWith('.json')) {
                const numberPage = Number(fileNames[index].split(".")[0].split("page")[1])

                // if (!mappers[flagCounter]) {
                //     continue;
                // }

                if (mappers.includes(numberPage)) {
                    console.log(`i: ${index}, combine: ${numberPage}`);
                    await combineTwoPagesInOne(numberPage);
                    flagCounter++
                    index++
                    continue;
                } else {
                    const filePath = `${directoryPath}/${fileNames[index]}`; // Construct full file path
                    console.log(`i: ${index}, normal: ${numberPage}`);
                    // Read the file content
                    const jsonData = await fs.readFile(filePath, 'utf-8'); // Read as UTF-8
                    // Parse the JSON data (assuming it's valid JSON)
                    const pageData = JSON.parse(jsonData);
                    // save the page
                    const targetPath = path.join(directoryToPagePath, `${fileNames[index - flagCounter]}`); // Combine into pageX.json
                    // Write combined data to target file
                    await fs.writeFile(targetPath, JSON.stringify(pageData, null, 2), 'utf-8');

                }

            } else {
                console.log(`Skipping non-JSON file: ${fileName}`); // Informative message
            }
        }
    } catch (error) {
        console.error('Error reading directory:', error);
    }
};

