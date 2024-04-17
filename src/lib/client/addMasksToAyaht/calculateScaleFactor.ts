export const calculateScaleFactor = (diff: number, scrollWidth: number) => {
    if (diff < 0) {
        return 1.035 + Math.abs(diff) / scrollWidth;
    } else {
        return 1 - Math.abs(diff) / scrollWidth;
    }
}