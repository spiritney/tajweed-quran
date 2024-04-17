import { getGlobalActiveLine } from "../addMasksToAyaht/store/getGlobalActiveLine";
import { getGlobalLinesLength } from "../addMasksToAyaht/store/getGlobalLinesLength";
import { setGlobalActiveLine } from "../addMasksToAyaht/store/setGlobalActiveLine";
import { pauseAnimationWidth } from "./pauseAnimationWidth";
import { startAnimationWidth } from "./startAnimationWidth";
import { getGlobalIsAnimating } from "./store/getGlobalIsAnimating";

export const nextAnimationWidth = () => {
    const currentMaskIndex = Number(getGlobalActiveLine()) - 1

    if (getGlobalIsAnimating() && currentMaskIndex < getGlobalLinesLength() - 1) {
        pauseAnimationWidth();
        setGlobalActiveLine(Number(getGlobalIsAnimating()))
        startAnimationWidth();
    }
}