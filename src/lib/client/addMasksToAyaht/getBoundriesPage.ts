import { getTargetWidth } from "$lib/components/Menu/store/fixScale/getTargetWidth";

export const getBoundriesPage = () => {
    const _targetWidth = getTargetWidth();
    const windowW = document.documentElement.clientWidth;

    const startPoint = windowW / 2 - _targetWidth / 2;
    const endPoint = windowW / 2 + _targetWidth / 2;

    const minX = startPoint;
    const maxX = endPoint;
    return { minX, maxX };
}