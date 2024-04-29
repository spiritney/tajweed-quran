import { calculateScaleX } from "$lib/client/fixAyahtScale/calculateScaleX";
import { FIX_SCALE_ATTR_BODY } from "$lib/constants";

const startFix = () => {


    // Select all ayahs
    const ayahs = document.querySelectorAll('.ayah .inner-ayah') as NodeListOf<HTMLElement>;

    ayahs.forEach((ayah, i) => {
        ayah.style.transform = `scaleX(${calculateScaleX(String(ayah.textContent), i)})`;
    });
}

export const addFixScale = () => {
    localStorage.setItem(FIX_SCALE_ATTR_BODY, 'true');

    startFix()

    setTimeout(() => {
        startFix()
    }, 1000);

    setTimeout(() => {
        // Select all ayahs
        startFix()
    }, 2000);

    setTimeout(() => {
        // Select all ayahs
        startFix()
    }, 3000);
}