import { addAutoGradientTransition } from "../addAutoGradientTransition";
import { addSafeScrollShortcuts } from "../addSafeScrollShortcuts";

export const activateAnimatator = () => {
    addSafeScrollShortcuts();
    addAutoGradientTransition();
}