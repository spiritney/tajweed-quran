import { addMasksToAyaht } from "$lib/client/addMasksToAyaht";
import { ADD_MASKS_ATTR_BODY } from "$lib/constants";

export const addMasks = () => {
    localStorage.setItem(ADD_MASKS_ATTR_BODY, 'true');
    addMasksToAyaht()
}