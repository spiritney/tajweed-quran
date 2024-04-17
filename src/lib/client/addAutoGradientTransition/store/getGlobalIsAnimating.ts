import { GLOBAL_IS_ANIMATING_ATTR_BODY } from "$lib/constants"

export const getGlobalIsAnimating = () => {
    return document.body.getAttribute(GLOBAL_IS_ANIMATING_ATTR_BODY) || false
}