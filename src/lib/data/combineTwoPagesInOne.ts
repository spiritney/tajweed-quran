import { directoryPath, directoryToPagePath } from '$lib/constants';
import fs from 'fs/promises';
import path from 'path';


export async function combineTwoPagesInOne(fileNumber: number) {
    const filePath1 = path.join(directoryPath, `page${fileNumber}.json`);
    const filePath2 = path.join(directoryPath, `page${fileNumber + 1}.json`);
    const targetPath = path.join(directoryToPagePath, `page${fileNumber}.json`); // Combine into pageX.json

    try {
        // Read both page data
        const [data1, data2] = await Promise.all([
            fs.readFile(filePath1, 'utf-8'),
            fs.readFile(filePath2, 'utf-8'),
        ]);

        // Parse JSON data (assuming valid JSON)
        const pageData1 = JSON.parse(data1);
        const pageData2 = JSON.parse(data2);

        // Combine page data (assuming appropriate structure for merging)
        const combinedData = [...pageData1, "", ...pageData2]; // Simple concatenation (modify for specific merging logic)

        // Write combined data to target file
        await fs.writeFile(targetPath, JSON.stringify(combinedData, null, 2), 'utf-8');
        console.log(`Combined pages ${fileNumber} and ${fileNumber + 1} into ${targetPath}`);
    } catch (error) {
        console.error(`Error combining pages ${fileNumber} and ${fileNumber + 1}:`, error);
        // Handle errors gracefully, e.g., log the error and continue processing other files
    }
}
