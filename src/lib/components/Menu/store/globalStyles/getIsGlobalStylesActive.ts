import { GLOBAL_STYLES_ATTR_BODY } from "$lib/constants"

export const getIsGlobalStylesActive = () => {
    // return document.body.getAttribute(GLOBAL_STYLES_ATTR_BODY) === "true" || false
    return localStorage.getItem(GLOBAL_STYLES_ATTR_BODY) === 'true'
}