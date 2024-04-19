import { INIT_BG } from "$lib/constants";
import { createMask } from "$lib/client/addMasksToAyaht/createMask";

export const addMasksToAyaht = () => {
    // For basmalah
    const basmalahs = document.querySelectorAll('.basmalah');

    basmalahs.forEach((basmalah, i) => {
        const maskBasmalah = createMask(i);
        basmalah.appendChild(maskBasmalah);

        // Add event listener for double click to reset percentage
        basmalah.addEventListener('dblclick', () => {
            maskBasmalah.style.setProperty('background', INIT_BG);
            maskBasmalah.setAttribute('current_percentage', "100");
        });
    });
    

    // For ayah's
    const ayahs = document.querySelectorAll('.ayah');

    ayahs.forEach((ayah, i) => {
        const mask = createMask(i + 1);
        ayah.appendChild(mask);
    });
}