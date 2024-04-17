import { GLOBAL_LINE_ATTR_BODY } from "$lib/constants"

export const getGlobalActiveLine = () => {
    return document.body.getAttribute(GLOBAL_LINE_ATTR_BODY) || "1"
}