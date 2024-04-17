import { generateUrl } from "$lib/client/utils/generateUrl";
import { getTextFromObject } from "$lib/client/utils/getTextFromObject";
import { insertAyahDividers } from "$lib/client/utils/insertAyahDividers";
import { END_of_AYAH } from "$lib/constants";
import { getData } from "$lib/data/getData";
import { pageRef } from "$lib/data/quran/pageRef";
import { source } from "$lib/data/source";
import { addTajweed } from "$lib/functions/addTajweed";


const pagesWithoutScale = [-1]


export const getHTML = (pageID: string) => {


    // const obj = {
    //     "tafsir": {
    //         "2_1": {
    //             "text": "الم"
    //         },
    //         "2_2": {
    //             "text": "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ"
    //         },
    //         "2_3": {
    //             "text": "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ"
    //         },
    //         "2_4": {
    //             "text": "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ"
    //         },
    //         "2_5": {
    //             "text": "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ"
    //         }
    //     }
    // }

    // console.log(getTextFromObject(obj));



    // console.log(insertAyahDividers(getTextFromObject(obj), [
    //     10, 15, 19, 27, 33
    // ]));

    // console.log(generateUrl(pageRef, 604));
    

    getData()


    let mainHTML = ``;

    // Replacing each occurrence of 'x' with the span containing the incremented ayahNumber
    let ayahNumber = 1;

    const withoutScale = pagesWithoutScale.includes(+pageID)

    let regex = /⭐/;

    source.filter((item) => item.page === +pageID).forEach((item, i) => {
        while (regex.test(mainHTML)) {
            mainHTML = mainHTML.replace(regex, `<span class="ayahNumber">﴿${ayahNumber++}﴾</span>`);
        }
        const theAyah = `<div class="inner-ayah ${withoutScale ? "without-scale" : ""}">${addTajweed(' ' + item.value + ' ' + END_of_AYAH)}</div>`
        if (item.type === 'BASMALA') {
            mainHTML += `<div id="ayah-${i + 1}" class="ayah-${i + 1} basmalah">${theAyah}</div>`;
        } else {
            mainHTML += `<div id="ayah-${i + 1}" class="ayah ayah-${i + 1}">${theAyah}</div>`;
        }
    });
    mainHTML = mainHTML.replace(regex, `<span class="ayahNumber">﴿${ayahNumber++}﴾</span>`);

    return {
        mainHTML,
        withoutScale
    };
}