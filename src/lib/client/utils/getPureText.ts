export const getPureText = (text: string) => {
    // Create a temporary HTML element to parse the text
    const element = document.createElement('p');
    element.innerHTML = text;

    // Extract the plain text content from the element
    const pureText = element.textContent;

    // Return the cleaned text
    return pureText || text;
};
