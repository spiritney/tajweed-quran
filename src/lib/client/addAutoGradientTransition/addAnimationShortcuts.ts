import { ENDING_AYAH, STARTING_AYAH } from "$lib/constants";
import { getGlobalActiveLine } from "../addMasksToAyaht/store/getGlobalActiveLine";
import { setGlobalActiveLine } from "../addMasksToAyaht/store/setGlobalActiveLine";
import { ayahIDWrapper } from "../utils/ayahIDWrapper";
import { smoothScrollToElement } from "../utils/smoothScrollToElement";
import { nextAnimationWidth } from "./nextAnimationWidth";
import { pauseAnimationWidth } from "./pauseAnimationWidth";
import { previousAnimationWidth } from "./previousAnimationWidth";
import { restartAnimationWidth } from "./restartAnimationWidth";
import { setAnimationWidth } from "./setAnimationWidth";
import { startAnimationWidth } from "./startAnimationWidth";
import { stopAnimationWidth } from "./stopAnimationWidth";
import { getGlobalIsAnimating } from "./store/getGlobalIsAnimating";

export const addAnimationShortcuts = () => {
    // Shortcut key listeners
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.altKey) {
            switch (e.key) {
                case "ArrowDown":
                    const newIndexArrowDown = Number(getGlobalActiveLine()) + 1;
                    const isOkayArrowDown = setGlobalActiveLine(newIndexArrowDown);
                    smoothScrollToElement(!isOkayArrowDown ? ENDING_AYAH : ayahIDWrapper(newIndexArrowDown));
                    break;
                case "ArrowUp":
                    const newIndexArrowUp = Number(getGlobalActiveLine()) - 1;
                    const isOkayArrowUp = setGlobalActiveLine(newIndexArrowUp);
                    smoothScrollToElement(!isOkayArrowUp ? STARTING_AYAH : ayahIDWrapper(newIndexArrowUp));
                    break;
                case 'm':
                    const topMenu = document.getElementById("top-menu");
                    if (topMenu) {
                        if (topMenu.style.display === "flex") {
                            topMenu.style.display = "none";
                        } else {
                            topMenu.style.display = "flex";
                        }
                    }
                    break;
                case ' ':
                    if (!getGlobalIsAnimating()) {
                        startAnimationWidth();
                    } else {
                        pauseAnimationWidth();
                    }
                    break;
                case 'P':
                case 'p':
                    if (getGlobalIsAnimating()) {
                        pauseAnimationWidth();
                    }
                    break;
                case 'S':
                case 's':
                    if (getGlobalIsAnimating()) {
                        stopAnimationWidth();
                    }
                    break;
                case 'R':
                case 'r':
                    if (!getGlobalIsAnimating()) {
                        restartAnimationWidth();
                    }
                    break;
                case 'K':
                case 'k':
                    if (getGlobalIsAnimating()) {
                        previousAnimationWidth();
                    }
                    break;
                case 'J':
                case 'j':
                    if (getGlobalIsAnimating()) {
                        nextAnimationWidth();
                    }
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9': {
                    const index = parseInt(e.key);
                    if (!getGlobalIsAnimating()) {
                        setAnimationWidth(index);
                    }
                    break;
                }
                default:
                    break;
            }
        }
    });
}