import { json } from '@sveltejs/kit';
import type { PageServerLoad } from 'sveltekit';

export async function GET({ params }: PageServerLoad) {
    const { pageID } = params;

    // Construct the data file path based on the pageID

    try {
        // Import the JSON data for the requested page

        let data = (await import(`../../../../lib/data/quran/pages/page${pageID}.json`)).default


        // Return the data as the response
        return json(data)
    } catch (error) {
        console.error('Error fetching Quran page data:', error);

        // Handle errors appropriately (e.g., return a 404 status code)
        return json(404, 'Error fetching Quran page data');
    }
}