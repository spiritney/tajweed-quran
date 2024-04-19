import { DIRECTORY_PATH, DIRECTORY_TO_PAGE_PATH } from '$lib/constants';
import fs from 'fs/promises';


export async function combinePagesInOne(sourcePagesFilenames: string[], targetPageFilename: string) {
    try {
        // Initialize combined pages array with an empty string
        let combinedPages = [];

        // Loop through target pages and append their contents to combinedPages
        for (let index = 0; index < sourcePagesFilenames.length; index++) {
            const sourcePageFilename = sourcePagesFilenames[index];
            const sourcePageContent = await fs.readFile(
                DIRECTORY_PATH + "/" + sourcePageFilename,
                "utf-8"
            );
            const sourcePageData = JSON.parse(sourcePageContent);
            combinedPages.push(...sourcePageData);
            // add if not the end
            if (index !== sourcePagesFilenames.length - 1) {
                combinedPages.push(``); // Add an empty string between pages
            }
        }

        // Write the combined pages to the target page file
        await fs.writeFile(
            DIRECTORY_TO_PAGE_PATH + "/" + targetPageFilename,
            JSON.stringify(combinedPages, null, 2),
            "utf-8"
        );

        console.log(`Combined pages successfully written to ${targetPageFilename}`);
    } catch (error) {
        console.error("Error combining pages:", error);
    }
}