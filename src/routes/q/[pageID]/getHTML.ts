import { END_of_AYAH } from "$lib/constants";
import { source } from "$lib/data/source";
import { addTajweed } from "$lib/functions/addTajweed";


const pagesWithoutScale = [-1]


export const getHTML = (pageID: string) => {
    let mainHTML = ``;

    // Replacing each occurrence of 'x' with the span containing the incremented ayahNumber
    let ayahNumber = 1;

    const withoutScale = pagesWithoutScale.includes(+pageID)

    let regex = /⭐/;

    source.filter((item) => item.page === +pageID).forEach((item, i) => {
        while (regex.test(mainHTML)) {
            mainHTML = mainHTML.replace(regex, `<span class="ayahNumber">﴿${ayahNumber++}﴾</span>`);
        }

        if (item.type === 'BASMALA') {
            mainHTML += `<div id="ayah-${i + 1}" class="ayah-${i + 1} basmalah"><div class="inner-ayah ${withoutScale ? "without-scale" : ""}">${addTajweed(' ' + item.value + ' ' + END_of_AYAH)}</div></div>`;
        } else {
            mainHTML += `<div id="ayah-${i + 1}" class="ayah ayah-${i + 1}"><div class="inner-ayah ${withoutScale ? "without-scale" : ""}">${addTajweed(
                ' ' + item.value + ' ' + END_of_AYAH
            )}</div></div>`;
        }
    });
    mainHTML = mainHTML.replace(regex, `<span class="ayahNumber">﴿${ayahNumber++}﴾</span>`);

    return {
        mainHTML,
        withoutScale
    };
}