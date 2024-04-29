export const animateElement = (mask: any, lineDuration: number, lineGap: number) => {
    mask.style.width = '0px';
    mask.style.transition = 'none'; // Disable previous transition
    mask.style.transition = `width ${lineDuration}ms cubic-bezier(0,.39,.99,.57)`;

    setTimeout(() => {
        mask.style.width = `${0}px`;
        setTimeout(() => {
            mask.style.opacity = '0';
        }, lineDuration);
    }, lineGap);
}

