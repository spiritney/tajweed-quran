import fs from 'fs/promises';


export async function copyFile(sourcePath: string, destinationPath: string) {
    try {
        await fs.copyFile(sourcePath, destinationPath);
        // console.log('File copied successfully!');
    } catch (error) {
        console.error('Error copying file:', error);
    }
}
