import { getGlobalIsAnimating } from "./store/getGlobalIsAnimating";
import { setGlobalIsAnimating } from "./store/setGlobalIsAnimating";

export const pauseAnimationWidth = () => {
    if (getGlobalIsAnimating()) {
        setGlobalIsAnimating(false);
    }
}
