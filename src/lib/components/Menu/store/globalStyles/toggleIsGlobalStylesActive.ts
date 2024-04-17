import { getIsGlobalStylesActive } from "./getIsGlobalStylesActive"
import { setIsGlobalStylesActive } from "./setIsGlobalStylesActive"

export const toggleIsGlobalStylesActive = () => {
    if (getIsGlobalStylesActive()) {
        setIsGlobalStylesActive(false)
    }
    else {
        setIsGlobalStylesActive(true)
    }
}