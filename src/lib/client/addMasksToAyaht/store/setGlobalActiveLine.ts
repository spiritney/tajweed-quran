import { ayahIDWrapper } from "$lib/client/utils/ayahIDWrapper";
import { GLOBAL_LINE_ATTR_BODY } from "$lib/constants"

export const setGlobalActiveLine = (index: number) => {
    // check if that ayah line exists
    const element = document.getElementById(ayahIDWrapper(index));
    if (element) {
        document.body.setAttribute(GLOBAL_LINE_ATTR_BODY, String(index))
        return true
    }

    return false
}