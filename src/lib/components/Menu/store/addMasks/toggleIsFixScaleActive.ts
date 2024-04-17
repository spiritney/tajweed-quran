import { getIsAddMasksActive } from "./getIsAddMasksActive"
import { setIsAddMasksActive } from "./setIsAddMasksActive"

export const toggleIsAddMasksActive = () => {
    if (getIsAddMasksActive()) {
        setIsAddMasksActive(false)
    }
    else {
        setIsAddMasksActive(true)
    }
}