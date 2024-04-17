import { targetWidthWithoutMargin } from "$lib/constants";
import { calculateAyahWidth } from "$lib/client/fixAyahtScale/calculateScaleX";

export const calculateDifference = (text: string, index: number) => {
    return targetWidthWithoutMargin - calculateAyahWidth(text, index);
}