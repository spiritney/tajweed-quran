import { getPureText } from "$lib/client/utils/getPureText";
import { el7roufAlAbjadiya } from "$lib/constants";
import { shadda } from "$lib/constants";
import { edghamClassName } from "$lib/constants";

export function edgham(_text: string) {
    let text = _text;


    /**
     * الأول: الإدغام بلا غنة
     * وهو أن يدغما في اللام والراء إدغامًا كاملاً بلا غنة نحو
     * {من لم}، و:{لا عبرةً لمن}، و:{من ربّكم}، و:{محمدٌ رسول الله}
     * وعلة ذلك قُرب مخرج النون والتنوين من مخرج اللام والراء
     * لأنهن من حروف طرف اللسان، فتمكّن الإدغام وذهبت الغنة في الإدغام.
     *     لكنهـــا قســمان قســمٌ يُدْغَمَــا           فيـــه بغنـــةٍ بينمـــو عُلِمَــا
     * 
     * 
     * استنتج من هذا انه عندما تاتي الراء
     *  يكون قبلها ل يجب ان ندغم اللام في الراء
     *  فيصبح اللام غير ملفوظا بها ويكون لونها رماديا
     */
    const ellam = `ل`
    const erraa = `ر`
    const searchedghamA1 = ellam + erraa

    if (getPureText(text).includes(searchedghamA1)) {

        const words = text.split(" ")
        const _words: string[] = []

        words.forEach(word => {
            if (word.includes(ellam) && word.includes(erraa)) {
                _words.push(word.replaceAll(
                    ellam,
                    `<span_class="${edghamClassName}">${ellam}</span>`
                ))
            } else {
                _words.push(word)
            }
        });
        // console.log("words", words);

        text = _words.join(" ")
        // text = text.replaceAll(
        //     ellam,
        //     `<span_class="${edghamClassName}">${ellam}</span>`
        // );
    }



    // تعرف النون الساكنة المدغمة، بعدم وجود شيء فوقها، بتقدمها لإ حدى هذه الحروف الستة، ووجود الشدة فوق الحرف المتحرك الذي بعدها.
    // https://ar.wikipedia.org/wiki/%D8%A3%D8%AD%D9%83%D8%A7%D9%85_%D8%A7%D9%84%D9%86%D9%88%D9%86_%D8%A7%D9%84%D8%B3%D8%A7%D9%83%D9%86%D8%A9_%D9%88%D8%A7%D9%84%D8%AA%D9%86%D9%88%D9%8A%D9%86
    // ellam + el7arf + shadda

    el7roufAlAbjadiya.forEach((el7arf) => {
        if (el7arf !== ellam ) {
            const searchedghamA2 = ellam + el7arf + shadda

            if (getPureText(text).includes(searchedghamA2)) {
                console.log("el7arf=>", el7arf);
                console.log("ellam + el7arf + shadda=>", `${ellam} ${el7arf} ${shadda}`);

                const words = text.split(" ")
                const _words: string[] = []

                words.forEach(word => {
                    if (word.includes(searchedghamA2)) {
                        _words.push(word.replace(
                            ellam,
                            `<span_class="${edghamClassName}">${ellam}</span>`
                        ))
                    } else {
                        _words.push(word)
                    }
                });
                console.log("words", words);

                text = _words.join(" ")
                // text = text.replaceAll(
                //     ellam,
                //     `<span_class="${edghamClassName}">${ellam}</span>`
                // );
            }
        }

    })











    // //////////////////////

    const searchedgham1 = `\u062F\u064A\u0657`;
    if (text.includes(searchedgham1)) {
        //    هُديٗ
        // -> \u062F          د
        // -> \u064A          ي
        //    \u0657          ٗ
        text = text.replaceAll(
            searchedgham1,
            `\u062F\u064A<span_class="${edghamClassName}">\u0657</span>`
        );
    }


    const searchedgham2 = `الْ`;
    if (text.includes(searchedgham2)) {
        //    بِالْغَيْبِ
        //    \u0650          ِ
        // -> \u0627          ا
        //    \u0644          ل
        //    \u0652          ْ
        //
        text = text.replaceAll(
            searchedgham2,
            `<span_class="${edghamClassName}">ا</span>لْ`
        );
    }

    const searchedgham3 = `وٰ`;
    if (text.includes(searchedgham3)) {
        //    اَ۬لصَّلَوٰةَ
        //    \u0627         ا
        //    \u064E         َ
        //    \u06EC        ۬
        // -> \u0644        ل
        //
        text = text.replaceAll(
            searchedgham3,
            `<span_class="${edghamClassName}">${searchedgham3}</span>`
        );
    }




    const searchedgham4 = `الّ`;
    if (text.includes(searchedgham4)) {
        //   وَالذِينَ 
        //    \u064E        َ
        // -> \u0627        ا
        // -> \u0644        ل
        //
        text = text.replaceAll(
            searchedgham4,
            `<span_class="${edghamClassName}">ا</span>لّ`
        );
    }

    const searchedgham6 = `وْ`;
    if (text.includes(searchedgham6)) {
        //   أُوْلَٰئِكَ
        // -> \u0648        و
        // -> \u0652         ْ
        //
        text = text.replaceAll(
            searchedgham6,
            `<span_class="${edghamClassName}">${searchedgham6}</span>`
        );
    }


    // /////////////////////////////////////
    // const searchedgham3 = `\u06EC\u0644`;
    // if (text.includes(searchedgham3)) {
    //     //    اَ۬لصَّلَوٰةَ
    //     //    \u06EC        ۬
    //     // -> \u0644        ل
    //     //
    //     text = text.replaceAll(
    //         searchedgham3,
    //         `\u06EC<span_class="${edghamClassName}">\u0644</span>`
    //     );
    // }

    // // Fix

    // const fix1 = `<span_class="${edghamClassName}">\u0644</span>\u0651\u064E`;
    // if (text.includes(fix1)) {
    //     //   اَ۬لَّذِينَ  
    //     // -> \u0644        ل  <span_class="${edghamClassName}">\u0644</span>
    //     // -> \u0651         ّ
    //     // -> \u064E         َ
    //     //
    //     text = text.replaceAll(
    //         fix1,
    //         `\u0644\u0651\u064E`
    //     );
    // }


    // const fix2 = `<span_class="${edghamClassName}">\u0644</span>\u0652`;
    // if (text.includes(fix2)) {
    //     //   اُ۬لْمُفْلِحُونَۖ  
    //     // -> \u0644<span_class="${edghamClassName}">\u0644</span>
    //     // -> \u0652        ْ
    //     //
    //     text = text.replaceAll(
    //         fix2,
    //         `\u0644\u0652`
    //     );
    // }


    return text;
}