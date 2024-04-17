export function smoothScrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
        // Scroll to the element
        // console.log('🚀 ~ smoothScrollToElement ~ Scroll to the element:', element);
        const offsetTop =
            element.offsetTop -
            window.innerHeight / 2 +
            element.offsetHeight / 2 -
            element.offsetHeight / 4;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}