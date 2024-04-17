import { BASE_MASK_COLOR, COLOR_MASK, TRANSPERENCY_BG_MASK_ON_HOVER } from "$lib/constants";

export const getBgTransperncy = (percentage: number) => {
    return `linear-gradient(90deg, ${COLOR_MASK} 0%, ${COLOR_MASK} ${percentage - TRANSPERENCY_BG_MASK_ON_HOVER
        }%, rgba(${BASE_MASK_COLOR},0) ${percentage}%)`;
}