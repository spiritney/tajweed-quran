import { startAnimationWidth } from "./startAnimationWidth";
import { stopAnimationWidth } from "./stopAnimationWidth";

export const restartAnimationWidth = () => {
    stopAnimationWidth();
    startAnimationWidth();
}