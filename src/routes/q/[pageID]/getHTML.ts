import { getTextFromObject } from "$lib/client/utils/getTextFromObject";
import { insertAyahDividers } from "$lib/client/utils/insertAyahDividers";
import { END_of_AYAH } from "$lib/constants";
import { source } from "$lib/data/source";
import { addTajweed } from "$lib/functions/addTajweed";


const pagesWithoutScale = [-1]


export const getHTML = async (pageID: string) => {


    let data = (await import(`../../../lib/data/quran/pages/page${pageID}.json`)).default
    let dividers = (await import(`../../../lib/data/quran/dividers/page${pageID}.json`)).default

    // console.log("🚀 ~ getHTML ~ data:", data)
    // console.log(getTextFromObject(data));

    const source = insertAyahDividers(getTextFromObject(data), dividers).split(" * ")
    console.log("🚀 ~ getHTML ~ source:", source)



    let mainHTML = ``;

    // Replacing each occurrence of 'x' with the span containing the incremented ayahNumber
    let ayahNumber = 1;

    const withoutScale = pagesWithoutScale.includes(+pageID)

    let regex = /⭐/;

    source.forEach((item, i) => {
        while (regex.test(mainHTML)) {
            mainHTML = mainHTML.replace(regex, `<span class="ayahNumber">﴿${ayahNumber++}﴾</span>`);
        }
        
        const theAyah = `<div class="inner-ayah ${withoutScale ? "without-scale" : ""}">${addTajweed(' ' + item + ' ' + END_of_AYAH)}</div>`

        mainHTML += `<div id="ayah-${i + 1}" class="ayah ayah-${i + 1}">${theAyah}</div>`;

        // if (item.type === 'BASMALA') {
        //     mainHTML += `<div id="ayah-${i + 1}" class="ayah-${i + 1} basmalah">${theAyah}</div>`;
        // } else {
        //     mainHTML += `<div id="ayah-${i + 1}" class="ayah ayah-${i + 1}">${theAyah}</div>`;
        // }
    });
    mainHTML = mainHTML.replace(regex, `<span class="ayahNumber">﴿${ayahNumber++}﴾</span>`);

    return {
        mainHTML,
        withoutScale
    };
}