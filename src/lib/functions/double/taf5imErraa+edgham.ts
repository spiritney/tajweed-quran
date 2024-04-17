import { edghamClassName, taf5imErraaClassName } from "$lib/constants";

export function taf5imErraaWaEdgham(_text: string) {

    let text = _text;


    const searchtaf5imErraaWaEdgham = `لرَّ`;
    if (text.includes(searchtaf5imErraaWaEdgham)) {

        text = text.replaceAll(
            searchtaf5imErraaWaEdgham,
            `<span_class="${edghamClassName}">${`ل`}</span><span_class="${taf5imErraaClassName}">${`رَّّ`}</span>`
        );

    }

    return text;
}