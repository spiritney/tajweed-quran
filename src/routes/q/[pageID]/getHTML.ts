import { AYAH_NUMBER_END, AYAH_NUMBER_START, BASMALAH, END_of_AYAH, SURAT, alBasmalah } from "$lib/constants";
import { addTajweed } from "$lib/functions/addTajweed";
import surat from "$lib/data/quran/surat.json";
import { getNumberSurahFromText } from "./getNumberSurahFromText";

const pagesWithoutScale = [-1]


export const getHTML = async (pageID: string) => {


    let data: string[] = (await import(`../../../lib/data/quran/pages/page${pageID}.json`)).default


    let mainHTML = ``;

    const withoutScale = pagesWithoutScale.includes(+pageID)

    data.forEach((item, i) => {

        if (item === BASMALAH) {
            mainHTML += `<div id="ayah-${i + 1}" class="ayah-${i + 1} basmalah">${addTajweed(' ' + alBasmalah + ' ' + END_of_AYAH)}</div>`;
        } else if (item.includes("__SURAH_")) {
            const surahNumber = getNumberSurahFromText(item);
            if (surahNumber) {
                console.log("🚀 ~ surahNumber:", surahNumber)
                const suratItem = surat[surahNumber][1]
                mainHTML += `<div id="ayah-${i + 1}" class="ayah-${i + 1} surah">${SURAT + suratItem }</div>`;
            }
        } else {
            // normal ayah
            const theAyah = `<div class="inner-ayah ${withoutScale ? "without-scale" : ""}">${addTajweed(' ' + item + ' ' + END_of_AYAH)}</div>`.replaceAll("(", AYAH_NUMBER_START).replaceAll(")", AYAH_NUMBER_END)
            mainHTML += `<div id="ayah-${i + 1}" class="ayah ayah-${i + 1}">${theAyah}</div>`;

        }
        console.log(item);

    });

    return {
        mainHTML,
        withoutScale
    };
}