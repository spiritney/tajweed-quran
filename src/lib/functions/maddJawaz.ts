import { END_of_AYAH, maddJawazClassName } from "$lib/constants";

export function maddJawaz(_text: string) {
    let text = _text;

    const searchMaddJawaz1 = `\u0642\u0650\u064A\u0646\u064E`;
    if (text.includes(searchMaddJawaz1)) {
        //    \u0642          ق
        //    \u0650           ِ
        // -> \u064A          ي
        //    \u0646          ن
        //    \u064E           َ
        text = text.replaceAll(
            searchMaddJawaz1,
            `\u0642\u0650<span_class="${maddJawazClassName}">\u064A</span_class=>\u0646\u064E`
        );
    }

    // const searchMaddJawaz2 = `\u0642\u064F\u0648\u0646\u064E`;
    // if (text.includes(searchMaddJawaz2)) {
    //     //    \u0642          ق
    //     //    \u064F           ُ
    //     // -> \u0648          و
    //     //    \u0646          ن
    //     //    \u064E           َ
    //     text = text.replaceAll(
    //         searchMaddJawaz2,
    //         `\u0642\u064F<span_class="${maddJawazClassName}">\u0648</span_class=>\u0646\u064E`
    //     );
    // }

    const searchMaddJawaz3 = `\u064F\u0648\u0646\u064E` + END_of_AYAH;
    if (text.includes(searchMaddJawaz3)) {
        //    يُوقِنُونَ 
        //    \u064F           ُ
        // -> \u0648          و
        //    \u0646          ن
        //    \u064E          َ
        text = text.replaceAll(
            searchMaddJawaz3,
            `\u064F<span_class="${maddJawazClassName}">\u0648</span_class=>\u0646\u064E`
        );
    }

    const searchMaddJawaz4 = `\u064F\u0648\u0646\u064E\u06D6` + END_of_AYAH;
    if (text.includes(searchMaddJawaz4)) {
        //    يُنفِقُونَۖ 
        //    \u064F           ُ
        // -> \u0648          و
        //    \u0646          ن
        //    \u064E          َ
        //    \u06D6         ۖ
        text = text.replaceAll(
            searchMaddJawaz4,
            `\u064F<span_class="${maddJawazClassName}">\u0648</span_class=>\u0646\u064E\u06D6`
        );
    }

    const searchMaddJawaz5 = `يمِ` + ' ' + END_of_AYAH;
    if (text.includes(searchMaddJawaz5)) {
        //    الرَّحِيمِ 

        text = text.replaceAll(
            searchMaddJawaz5,
            `<span_class="${maddJawazClassName}">ي</span_class=>مِ`
        );
    }



    // fix all in the middle of the text

    return text;
}