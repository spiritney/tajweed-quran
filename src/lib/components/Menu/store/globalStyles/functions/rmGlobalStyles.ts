import { GLOBAL_STYLES_ATTR_BODY } from "$lib/constants";

export const rmGlobalStyles = () => {
    localStorage.setItem(GLOBAL_STYLES_ATTR_BODY, 'false');
    document.body.style.userSelect = 'unset';
    document.body.style.cursor = `unset`;
}