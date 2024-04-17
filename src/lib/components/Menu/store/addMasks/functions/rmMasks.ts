import { ADD_MASKS_ATTR_BODY } from "$lib/constants";

export const rmMasks = () => {
    localStorage.setItem(ADD_MASKS_ATTR_BODY, 'false');

    // Select all masks
    const masks = document.querySelectorAll('.mask') as NodeListOf<HTMLElement>;

    masks.forEach((mask) => {
        mask.remove()
    });
}