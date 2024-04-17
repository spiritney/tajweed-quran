import { rmMasks } from "$lib/components/Menu/store/addMasks/functions/rmMasks";
import { setGlobalActiveLine } from "../addMasksToAyaht/store/setGlobalActiveLine";
import { pauseAnimationWidth } from "./pauseAnimationWidth";
import { resetAnimationStyles } from "./resetAnimationStyles";

export const stopAnimationWidth = () => {
    // console.log('stopAnimationWidth');
    rmMasks();
    pauseAnimationWidth();
    setGlobalActiveLine(1) // Reset index for restart
    resetAnimationStyles();
}
