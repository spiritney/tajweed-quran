import { GLOBAL_STYLES_ATTR_BODY } from "$lib/constants";

export const addGlobalStyles = () => {
    localStorage.setItem(GLOBAL_STYLES_ATTR_BODY, 'true');
    document.body.style.userSelect = 'none';
    document.body.style.cursor = `url('/customCursor.svg') 24 12, auto`;
}