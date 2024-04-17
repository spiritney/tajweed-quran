import { ghonaClassName } from "$lib/constants";

export function ghona(_text: string) {
    let text = _text;

    const searchghona1 = `\u0645\u0650\u0645\u0651\u064E\u0627`;
    if (text.includes(searchghona1)) {
        //    وَمِمَّا
        //    \u0645         م
        //    \u0650          ِ
        // -> \u0645         م
        // -> \u0651          ّ
        // -> \u064E          َ
        //    \u0627         ا
        text = text.replaceAll(
            searchghona1,
            `\u0645\u0650<span_class="${ghonaClassName}">\u0645\u0651\u064E</span>\u0627`
        );
    }

    const searchghona2 = `\u064A\u064F\u0646`;
    if (text.includes(searchghona2)) {
        //    يُنفِقُونَۖ
        //    \u064A         ي
        //    \u064F          ُ
        // -> \u0646         ن

        text = text.replaceAll(
            searchghona2,
            `\u064A\u064F<span_class="${ghonaClassName}">\u0646</span>`
        );
    }

    
    const searchghona3 = `\u0623\u064F\u0646`;
    if (text.includes(searchghona3)) {
        //   أُنزِلَ
        //    \u0623        أ
        // -> \u064F         ُ
        // -> \u0646        ن
        //
        text = text.replaceAll(
            searchghona3,
            `\u0623\u064F<span_class="${ghonaClassName}">\u0646</span>`
        );
    }

    const searchghona4 = `\u0645\u0650\u0646\u0020`;
    if (text.includes(searchghona4)) {
        //   مِن قَبْلِكَ
        //    \u0645        م
        // -> \u0650         ِ
        // -> \u0646        ن
        // -> \u0020        SPACE
        //
        text = text.replaceAll(
            searchghona4,
            `\u0645\u0650<span_class="${ghonaClassName}">\u0646</span>\u0020`
        );
    }

    const searchghona5 = `\u0020\u0645\u0651\u0650`;
    if (text.includes(searchghona5)) {
        //   مِّن
        //    \u0020        SPACE
        //    \u0645        م
        // -> \u0651         ّ
        // -> \u0650        ِ
        //
        text = text.replaceAll(
            searchghona5,
            `\u0020<span_class="${ghonaClassName}">\u0645\u0651\u0650</span>`
        );
    }


    return text;
}