import { calculateScaleX } from "$lib/client/fixAyahtScale/calculateScaleX";
import { FIX_SCALE_ATTR_BODY } from "$lib/constants";

export const addFixScale = () => {
    localStorage.setItem(FIX_SCALE_ATTR_BODY, 'true');

    // Select all ayahs
    const ayahs = document.querySelectorAll('.ayah .inner-ayah') as NodeListOf<HTMLElement>;

    ayahs.forEach((ayah, i) => {
        ayah.style.transform = `scaleX(${calculateScaleX(String(ayah.textContent), i)})`;


        // console.log('🚀textContent:', ayah.textContent);
        // console.log('scrollWidth:', ayah.scrollWidth);
        // const diff = targetWidth - calculateAyahWidth(String(ayah.textContent), i);
        // // console.log(`calc = ${(Math.abs(diff) * 1) / targetWidth}`);

        // console.log(ayah);
        // console.log(diff);

        // let scaleFactor = 1 - (((Math.abs(diff)) * 1) / targetWidth);

        // if (diff > 0) {
        //     // console.log('diff  > 0');
        //     // console.log(ayah);
        //     scaleFactor = 0.85 + Math.abs(diff) / ayah.scrollWidth;
        //     ayah.style.background = "red"
        // } else {
        //     // console.log('diff < 0');




        //     scaleFactor = 1 - Math.abs(diff) / ayah.scrollWidth;

        //     // if (ayah.innerHTML.search(/ayahNumber/g) === -1 && scaleFactor !== 1) {
        //     //     console.log("🚀", scaleFactor)
        //     //     scaleFactor = 0.88
        //     // }
        //     // scaleFactor = 1 - Math.abs(diff) / ayah.scrollWidth;
        // }

        // // console.log('🚀 ~ ayahs.forEach ~ scaleFactor:', scaleFactor);

        // @ts-ignore
    });
}