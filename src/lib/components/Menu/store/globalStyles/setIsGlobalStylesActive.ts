import { GLOBAL_STYLES_ATTR_BODY } from "$lib/constants"
import { addGlobalStyles } from "./functions/addGlobalStyles"
import { rmGlobalStyles } from "./functions/rmGlobalStyles"

export const setIsGlobalStylesActive = (isActive: boolean) => {
    document.body.setAttribute(GLOBAL_STYLES_ATTR_BODY, String(isActive))
    if (isActive) {
        addGlobalStyles()
    } else {
        rmGlobalStyles()
    }
}