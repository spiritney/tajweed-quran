import fs from 'fs/promises';

export async function getJsonFiles(DIRECTORY_PATH: string) {
    try {
        const allFiles = await fs.readdir(DIRECTORY_PATH);
        const jsonFiles = allFiles.filter((fileName) => fileName.endsWith('.json'));
        return jsonFiles;
    } catch (error) {
        console.error('Error reading directory:', error);
        // Handle the error appropriately (e.g., throw an exception or log a message)
    }
}
