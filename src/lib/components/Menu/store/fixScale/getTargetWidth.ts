import { normalTargetWidth, targetWidth } from "$lib/constants";

export const getTargetWidth = () => {
    const pageHref = window.location.href;
    const isMinimal = pageHref.includes("/q/1") || pageHref.includes("/q/2")
    if (isMinimal) {
        return targetWidth
    } else {
        return normalTargetWidth
    }
}