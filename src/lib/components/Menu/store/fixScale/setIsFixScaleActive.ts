import { FIX_SCALE_ATTR_BODY } from "$lib/constants"
import { addFixScale } from "./functions/addFixScale"
import { rmFixScale } from "./functions/rmFixScale"

export const setIsFixScaleActive = (isActive: boolean) => {
    document.body.setAttribute(FIX_SCALE_ATTR_BODY, String(isActive))
    if (isActive) {
        addFixScale()
    } else {
        rmFixScale()
    }
}