import { taf5imErraaClassName } from "$lib/constants";

export const taf5imErra7roufEst3laa1 = (text: string, el7arf: string) => {
    const searchtaf5imErraaSearcher = `ِرْ${el7arf}`;
    if (text.includes(searchtaf5imErraaSearcher)) {
        text = text.replaceAll(
            searchtaf5imErraaSearcher,
            `ِ<span_class="${taf5imErraaClassName}">رْ</span>${el7arf}`
        );
    }

    return text
}