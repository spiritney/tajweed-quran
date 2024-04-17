import { el9al9alaClassName } from "$lib/constants";

export function el9al9ala(_text: string) {
    let text = _text;

    const searchel9al9ala1 = `\u064E\u0642\u0652`;
    if (text.includes(searchel9al9ala1)) {
        //     رَزَقْنَٰهُمْ
        //    \u064E          َ
        // -> \u0642         ق
        // -> \u0652          ْ
        text = text.replaceAll(
            searchel9al9ala1,
            `\u064E<span_class="${el9al9alaClassName}">\u0642\u0652</span>`
        );
    }

    const searchel9al9ala2 = `\u064E\u0628\u0652`;
    if (text.includes(searchel9al9ala2)) {
        //     قَبْلِكَ 
        //    \u064E          َ
        // -> \u0628         ب
        // -> \u0652          ْ
        text = text.replaceAll(
            searchel9al9ala2,
            `\u064E<span_class="${el9al9alaClassName}">\u0628\u0652</span>`
        );
    }

    return text;
}