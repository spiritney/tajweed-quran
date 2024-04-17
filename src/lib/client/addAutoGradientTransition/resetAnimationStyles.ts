export const resetAnimationStyles = () => {
    const masks = document.querySelectorAll('.mask') as NodeListOf<HTMLElement>;
    masks.forEach((mask) => {
        mask.style.width = 'auto';
        mask.style.transition = 'none';
        mask.style.backgroundColor = 'white'; // Reset background if needed
        mask.style.opacity = '1'; // Reset opacity
    });
}