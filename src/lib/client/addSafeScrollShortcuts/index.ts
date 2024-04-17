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

    // if the mask is set disable the scroll
    // document.body.style.overflow = 'hidden';
    // document.body.style.height = '400vh';

    setGlobalActiveLine(1);


    // add a div at the top inside the #viewer id to fix the first line to be centered
    // const topDiv = document.createElement('div');
    // topDiv.style.position = 'relative';
    // topDiv.id = "starting-ayah"
    // topDiv.innerHTML = "<p>top1</p>"
    // topDiv.style.color = 'white';

    // const firstChild = document.getElementById('viewer')?.firstChild;
    // if (firstChild) {
    //     document.getElementById('viewer')?.insertBefore(topDiv, firstChild);
    // }

    // const bottomDiv = document.createElement('div');
    // bottomDiv.id = "ending-ayah"
    // bottomDiv.style.position = 'relative';
    // bottomDiv.innerHTML = "<p>bottom1</p> <p>bottom2</p>"
    // bottomDiv.style.color = 'white';

    // document.getElementById('viewer')?.appendChild(bottomDiv);

    smoothScrollToElement(ayahIDWrapper(1));


}