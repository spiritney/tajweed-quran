import { getGlobalActiveLine } from "../addMasksToAyaht/store/getGlobalActiveLine";
import { setGlobalActiveLine } from "../addMasksToAyaht/store/setGlobalActiveLine";
import { pauseAnimationWidth } from "./pauseAnimationWidth";
import { startAnimationWidth } from "./startAnimationWidth";
import { getGlobalIsAnimating } from "./store/getGlobalIsAnimating";

export const previousAnimationWidth = () => {
    const currentMaskIndex = Number(getGlobalActiveLine()) - 1
    if (getGlobalIsAnimating() && currentMaskIndex > 0) {
        pauseAnimationWidth();
        setGlobalActiveLine(currentMaskIndex)
        startAnimationWidth();
    }
}