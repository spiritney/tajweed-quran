import { GLOBAL_LINE_ATTR_BODY } from "$lib/constants"

export const getGlobalLinesLength = () => {
    const length = document.body.getAttribute(GLOBAL_LINE_ATTR_BODY)?.length
    return length || 0
}