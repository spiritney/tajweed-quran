import { INIT_BG, targetWidth, targetWidthBorders } from "$lib/constants";
import { getBgTransperncy } from "./getBgTransperncy";
import { getBoundriesPage } from "./getBoundriesPage";

export const createMask = (index: number) => {
    const ID = `mask-${index + 1}`;
    const mask = document.createElement('span');
    mask.style.height = '100%';
    mask.style.position = 'absolute';
    mask.style.top = '0';
    mask.style.margin = '0';
    mask.style.padding = '0';
    mask.style.width = `${targetWidth + targetWidthBorders}px`;  // Pre-calculate the width for clarity
    mask.className = 'mask';
    mask.style.left = `calc(30% - ${(targetWidth / 2)}px)`;  // Use calc() for better readability
    mask.style.overflow = 'hidden';
    mask.setAttribute('id', ID);
    mask.style.background = INIT_BG;
    mask.style.transform = ` translateX(${targetWidthBorders}px)`;



    // Set initial mouse position variables
    let prevMouseX = 0;
    let currentMouseX = 0;
    mask.setAttribute('current_percentage', "100");

    // Function to update background property
    function updateBackground(ID: string, percentage: number) {
        const elem = document.getElementById(ID);
        if (elem === null) return;

        const currentPercentageAttr = elem.getAttribute('current_percentage');

        if (currentPercentageAttr !== null) {
            if (+currentPercentageAttr > percentage) {
                elem.style.background = getBgTransperncy(percentage);
                elem.setAttribute('current_percentage', String(percentage));
                if (percentage > 0 && percentage <= 15) {
                    elem.style.background = getBgTransperncy(0);
                    elem.setAttribute('current_percentage', String(0));
                }
            }
        }
    }

    //
    // Add event listener for mousemove event
    mask.addEventListener('mousemove', (e) => {
        // Update current mouse position 
        currentMouseX = e.pageX;

        // if (getGlobalActiveLine() !== String(NUM)) {
        //     setGlobalActiveLine(NUM);
        // }

        // Calculate mouse movement direction
        const mouseMovementDirection = prevMouseX > currentMouseX ? -1 : 1;

        // Update background property based on mouse movement direction
        if (mouseMovementDirection === -1) {
            // const width = getComputedStyle(mask).width;
            // console.log(width);

            const mouseX = e.clientX;
            // console.log('mouseX:', mouseX);

            const { minX, maxX } = getBoundriesPage();

            const diffX = maxX - minX;
            const percentage = ((mouseX - minX) / diffX) * 100;
            const fixedPercentage = Math.round(Math.abs(percentage));

            const clampedPercentage = Math.min(Math.max(fixedPercentage, 0), 100);
            // console.log(clampedPercentage);

            updateBackground(ID, clampedPercentage);
        }

        // Update previous mouse position
        prevMouseX = currentMouseX;
    });

    return mask;
}