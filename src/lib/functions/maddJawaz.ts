import { PURE_AYAH_NUMBER_END, kasra } from "$lib/constants";
import { damma } from "$lib/constants";
import { END_of_AYAH, maddJawazClassName } from "$lib/constants";
import { replaceLast } from "./replaceLast";

export function maddJawaz(_text: string) {
    let text = _text;


    // حرف الياء او الواو مكسور او مضموم ما قبلها
    // يجب ان تكون في اخر الكلمه
    const el7roufList = [
        "ي",
        "و"
    ]
    const ma9ablahaList = [
        damma,
        kasra
    ]

    if (text.includes(PURE_AYAH_NUMBER_END)) {
        const arrayOfWords = text.split(" ")
        // console.log(arrayOfWords);


        let currentIndex = -1;
        while ((currentIndex = arrayOfWords.findIndex((v, i) => i > currentIndex && v.includes(PURE_AYAH_NUMBER_END))) !== -1) {
            if (currentIndex !== -1) {
                // console.log(currentIndex);
                let lastWord = arrayOfWords[currentIndex - 1]

                // console.log("---------");
                // console.log(lastWord);
                // console.log("---------");

                el7roufList.forEach(el7arf => {
                    if (lastWord.includes(`${el7arf}`)) {
                        ma9ablahaList.forEach(elChakel => {
                            const searchMaddJawaz1 = `${elChakel}${el7arf}`
                            if (lastWord.includes(searchMaddJawaz1)) {
                                lastWord = replaceLast(lastWord, searchMaddJawaz1, `${elChakel}<span_class="${maddJawazClassName}">${el7arf}</span>`)



                            }
                        });
                    }
                });
                arrayOfWords[currentIndex - 1] = lastWord

                text = arrayOfWords.join(" ")
            }
        }
    }





    // const searchMaddJawaz1 = `\u0642\u0650\u064A\u0646\u064E`;
    // if (text.includes(searchMaddJawaz1)) {
    //     //    \u0642          ق
    //     //    \u0650           ِ
    //     // -> \u064A          ي
    //     //    \u0646          ن
    //     //    \u064E           َ
    //     text = text.replaceAll(
    //         searchMaddJawaz1,
    //         `\u0642\u0650<span_class="${maddJawazClassName}">\u064A</span>\u0646\u064E`
    //     );
    // }

    // // const searchMaddJawaz2 = `\u0642\u064F\u0648\u0646\u064E`;
    // // if (text.includes(searchMaddJawaz2)) {
    // //     //    \u0642          ق
    // //     //    \u064F           ُ
    // //     // -> \u0648          و
    // //     //    \u0646          ن
    // //     //    \u064E           َ
    // //     text = text.replaceAll(
    // //         searchMaddJawaz2,
    // //         `\u0642\u064F<span_class="${maddJawazClassName}">\u0648</span>\u0646\u064E`
    // //     );
    // // }

    // const searchMaddJawaz3 = `\u064F\u0648\u0646\u064E` + END_of_AYAH;
    // if (text.includes(searchMaddJawaz3)) {
    //     //    يُوقِنُونَ 
    //     //    \u064F           ُ
    //     // -> \u0648          و
    //     //    \u0646          ن
    //     //    \u064E          َ
    //     text = text.replaceAll(
    //         searchMaddJawaz3,
    //         `\u064F<span_class="${maddJawazClassName}">\u0648</span>\u0646\u064E`
    //     );
    // }

    // const searchMaddJawaz4 = `\u064F\u0648\u0646\u064E\u06D6` + END_of_AYAH;
    // if (text.includes(searchMaddJawaz4)) {
    //     //    يُنفِقُونَۖ 
    //     //    \u064F           ُ
    //     // -> \u0648          و
    //     //    \u0646          ن
    //     //    \u064E          َ
    //     //    \u06D6         ۖ
    //     text = text.replaceAll(
    //         searchMaddJawaz4,
    //         `\u064F<span_class="${maddJawazClassName}">\u0648</span>\u0646\u064E\u06D6`
    //     );
    // }

    // const searchMaddJawaz5 = `يمِ` + ' ' + END_of_AYAH;
    // if (text.includes(searchMaddJawaz5)) {
    //     //    الرَّحِيمِ 

    //     text = text.replaceAll(
    //         searchMaddJawaz5,
    //         `<span_class="${maddJawazClassName}">ي</span>مِ`
    //     );
    // }



    // fix all in the middle of the text

    return text;
}