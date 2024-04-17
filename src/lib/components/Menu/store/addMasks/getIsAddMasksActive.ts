import { ADD_MASKS_ATTR_BODY } from "$lib/constants"

export const getIsAddMasksActive = () => {
    return localStorage.getItem(ADD_MASKS_ATTR_BODY) === 'true'
}