const DIRECTORY_PATH = "./source-pages";
const DIRECTORY_TO_PAGE_PATH = "./target-pages";
const fs = require("fs").promises;

const mappers = require("./mapper.json");

async function getJsonFiles(DIRECTORY_PATH) {
  try {
    const allFiles = await fs.readdir(DIRECTORY_PATH);
    const jsonFiles = allFiles.filter((fileName) => fileName.endsWith(".json"));
    return jsonFiles;
  } catch (error) {
    console.error("Error reading directory:", error);
    // Handle the error appropriately (e.g., throw an exception or log a message)
  }
}

async function copyFile(sourcePath, destinationPath) {
  try {
    await fs.copyFile(sourcePath, destinationPath);
    // console.log('File copied successfully!');
  } catch (error) {
    console.error("Error copying file:", error);
  }
}

async function combinePagesInOne(sourcePagesFilenames, targetPageFilename) {
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
        combinedPages.push(` `); // Add an empty string between pages
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

async function main() {
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
}
main();
