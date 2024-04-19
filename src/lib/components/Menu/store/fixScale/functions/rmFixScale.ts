import { FIX_SCALE_ATTR_BODY } from "$lib/constants";

export const rmFixScale = () => {
    console.log("rmFixScale");
    
    localStorage.setItem(FIX_SCALE_ATTR_BODY, 'false');

    // Select all ayahs
    const ayahs = document.querySelectorAll('.ayah') as NodeListOf<HTMLElement>;

    ayahs.forEach((ayah) => {
        ayah.style.transform = `scaleX(1)`;
    });

    window.location.reload();
}