import { ENDING_AYAH, STARTING_AYAH } from "$lib/constants";
import { getGlobalActiveLine } from "../addMasksToAyaht/store/getGlobalActiveLine";
import { setGlobalActiveLine } from "../addMasksToAyaht/store/setGlobalActiveLine";
import { ayahIDWrapper } from "../utils/ayahIDWrapper";
import { smoothScrollToElement } from "../utils/smoothScrollToElement";

export const addSafeScrollShortcuts = () => {



    document.addEventListener('keydown', function (event) {
        // const activeLine = Number(getGlobalActiveLine())
        // console.log("activeLine => ", activeLine);

        if (event.ctrlKey && event.altKey) {
            if (event.key === 'ArrowDown') {
                const newIndex = Number(getGlobalActiveLine()) + 1;
                const isOkay = setGlobalActiveLine(newIndex);
                smoothScrollToElement(!isOkay ? ENDING_AYAH : ayahIDWrapper(newIndex));
            } else if (event.key === 'ArrowUp') {
                const newIndex = Number(getGlobalActiveLine()) - 1;
                const isOkay = setGlobalActiveLine(newIndex);
                smoothScrollToElement(!isOkay ? STARTING_AYAH : ayahIDWrapper(newIndex));
            }
        }

    });

    setGlobalActiveLine(1);
    smoothScrollToElement(ayahIDWrapper(1));
}