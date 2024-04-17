import { ADD_MASKS_ATTR_BODY } from "$lib/constants"
import { addMasks } from "./functions/addMasks"
import { rmMasks } from "./functions/rmMasks"

export const setIsAddMasksActive = (isActive: boolean) => {
    document.body.setAttribute(ADD_MASKS_ATTR_BODY, String(isActive))
    if (isActive) {
        addMasks()
    } else {
        rmMasks()
    }
}