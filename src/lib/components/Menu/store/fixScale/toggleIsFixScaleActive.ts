import { getIsFixScaleActive } from "./getIsFixScaleActive"
import { setIsFixScaleActive } from "./setIsFixScaleActive"

export const toggleIsFixScaleActive = () => {
    if (getIsFixScaleActive()) {
        setIsFixScaleActive(false)
    }
    else {
        setIsFixScaleActive(true)
    }
    window.location.reload()
}