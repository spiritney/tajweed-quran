export function insertAyahDividers(text: string, positions: number[]) {
    const words = text.split(" "); // Split the text into words

    for (let i = 0; i < words.length; i++) {
        if (positions.includes(i + 1)) {
            words[i] = words[i] + " * "; // Add asterisk to the word at the position
        }
    }

    return words.join(" "); // Join the modified words back into a string
}
