import { FIX_SCALE_ATTR_BODY } from "$lib/constants"

export const getIsFixScaleActive = () => {
    return !localStorage.getItem(FIX_SCALE_ATTR_BODY) || localStorage.getItem(FIX_SCALE_ATTR_BODY)  === 'true'
}