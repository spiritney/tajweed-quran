import { GLOBAL_IS_ANIMATING_ATTR_BODY } from "$lib/constants"

export const setGlobalIsAnimating = (isAnimating: boolean) => {
    document.body.setAttribute(GLOBAL_IS_ANIMATING_ATTR_BODY, String(isAnimating))
}