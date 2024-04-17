import { getGlobalLinesLength } from "../addMasksToAyaht/store/getGlobalLinesLength";
import { setGlobalActiveLine } from "../addMasksToAyaht/store/setGlobalActiveLine";
import { startAnimationWidth } from "./startAnimationWidth";
import { stopAnimationWidth } from "./stopAnimationWidth";

export const setAnimationWidth = (lineNumber: number) => {
    if (lineNumber >= 0 && lineNumber < getGlobalLinesLength()) {
        stopAnimationWidth();
        setGlobalActiveLine(lineNumber);
        startAnimationWidth();
    }
}