export function scrollByY(offset: number) {
    window.scrollBy({
        top: offset,
        behavior: 'smooth' // for smoother scrolling (optional)
    });
}
