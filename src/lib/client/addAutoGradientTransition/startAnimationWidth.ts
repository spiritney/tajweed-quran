import { addMasks } from "$lib/components/Menu/store/addMasks/functions/addMasks";
import { ANIMATED_BG, LINE_DURATION, LINE_GAP } from "$lib/constants";
import { getGlobalActiveLine } from "../addMasksToAyaht/store/getGlobalActiveLine";
import { setGlobalActiveLine } from "../addMasksToAyaht/store/setGlobalActiveLine";
import { scrollByY } from "../scrollByY";
import { ayahIDWrapper } from "../utils/ayahIDWrapper";
import { smoothScrollToElement } from "../utils/smoothScrollToElement";
import { animateElement } from "./animateElement";
import { setGlobalIsAnimating } from "./store/setGlobalIsAnimating";

export const startAnimationWidth = () => {
    // console.log('startAnimationWidth');

    const allMasks = document.querySelectorAll('.mask') as NodeListOf<HTMLElement>;
    if (allMasks.length === 0) {
        addMasks();
    }

    setGlobalActiveLine(0); // Reset index for loop

    const masks = document.querySelectorAll('.mask');
    let refTimeOut: any = null

    function animate() {

        const activeLineNumber = Number(getGlobalActiveLine())
        // console.log("🚀 ~ animate :", activeLineNumber)

        const maskIndex = activeLineNumber - 1
        const mask = masks[maskIndex] as HTMLElement | null;
        if (!mask) {
            setGlobalIsAnimating(false);
            return; // Stop when all masks are done
        } else {
            mask.style.background = ANIMATED_BG;
            smoothScrollToElement(ayahIDWrapper(activeLineNumber));
        }

        animateElement(mask, LINE_DURATION, LINE_GAP);
        setGlobalActiveLine(Number(activeLineNumber) + 1) // index++
        scrollByY(48)

        if (activeLineNumber < masks.length) {

            refTimeOut = setTimeout(() => {
                animate();
            }, LINE_DURATION + LINE_GAP);
        } else {
            setGlobalIsAnimating(false);
            clearInterval(refTimeOut)
            return
        }

    }
    animate();

    setGlobalIsAnimating(false);
}