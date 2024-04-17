import { targetWidth } from "$lib/constants";

export const getBoundriesPage = () => {
    const windowW = document.documentElement.clientWidth;

    const startPoint = windowW / 2 - targetWidth / 2;
    const endPoint = windowW / 2 + targetWidth / 2;

    const minX = startPoint;
    const maxX = endPoint;
    return { minX, maxX };
}