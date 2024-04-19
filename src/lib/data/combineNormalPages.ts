import mappers from "$lib/data/quran/mappers.json";
import { DIRECTORY_PATH, DIRECTORY_TO_PAGE_PATH } from '$lib/constants';
import { getJsonFiles } from './getJsonFiles';
import { copyFile } from './copyFile';
import { combinePagesInOne } from './combinePagesInOne';

export const combineNormalPages = async () => {
    try {
        // Get a list of file names
        const pages = await getJsonFiles(DIRECTORY_PATH);
        if (pages && pages.length > 0) {

            // Sort file names naturally (considering leading zeros)
            pages.sort((a, b) => {
                return a.localeCompare(b, undefined, { numeric: true });
            });

            let mapperCounter = 0;
            let targetPageNumber = 1;
            let sourcePageNumber = 1;

            for (let index = 0; index < pages.length; index++) {
                targetPageNumber = index + 1;

                const isPagesWillCombine =
                    mappers[mapperCounter] &&
                    mappers[mapperCounter][0] === sourcePageNumber;

                if (isPagesWillCombine) {
                    const numberOfPagesToCombine = mappers[mapperCounter][1];

                    const startPageNumberToCombine = targetPageNumber;

                    const endPageNumberToCombine =
                        startPageNumberToCombine + numberOfPagesToCombine - 1;

                    const sourcePageFilename = pages[sourcePageNumber - 1];

                    const targetPagesFilenames = [];
                    for (
                        let i = startPageNumberToCombine;
                        i <= endPageNumberToCombine;
                        i++
                    ) {
                        targetPagesFilenames.push(`page${i}.json`);
                    }

                    console.log(
                        `Combine pages: [${targetPagesFilenames.join(", ")}]
           all of them to source page '${sourcePageFilename}'.
           `
                    );
                    await combinePagesInOne(targetPagesFilenames, sourcePageFilename);

                    index = index + numberOfPagesToCombine - 1;
                    mapperCounter = mapperCounter + 1;
                }

                if (!isPagesWillCombine) {
                    const targetPageFilename = pages[targetPageNumber - 1];
                    const sourcePageFilename = pages[sourcePageNumber - 1];

                    console.log(
                        `copy target page '${targetPageFilename}' to source '${sourcePageFilename}'
          `
                    );

                    const sourcePath = DIRECTORY_PATH + "/" + targetPageFilename;
                    const targetPath = DIRECTORY_TO_PAGE_PATH + "/" + sourcePageFilename;

                    await copyFile(sourcePath, targetPath);
                }

                sourcePageNumber = sourcePageNumber + 1;
            }
        }
    } catch (error) {
        console.error('Error reading directory:', error);
    }
};

