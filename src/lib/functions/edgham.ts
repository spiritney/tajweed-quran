import { getPureText } from "$lib/client/utils/getPureText";
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
    // const ellam = `ل`
    // const erraa = `ر`
    // const searchedghamA1 = ellam + erraa

    // if (getPureText(text).includes(searchedghamA1)) {
    //     console.log(text);

    //     text = text.replaceAll(
    //         searchedghamA1,
    //         `<span_class="${edghamClassName}">${ellam}</span>${erraa}`
    //     );
    // }


    // //////////////////////

    // const searchedgham1 = `\u062F\u064A\u0657`;
    // if (text.includes(searchedgham1)) {
    //     //    هُديٗ
    //     // -> \u062F          د
    //     // -> \u064A          ي
    //     //    \u0657          ٗ
    //     text = text.replaceAll(
    //         searchedgham1,
    //         `\u062F\u064A<span_class="${edghamClassName}">\u0657</span>`
    //     );
    // }


    // // const searchedgham2 = `\u0650\u0627\u0644\u0652`;
    // // if (text.includes(searchedgham2)) {
    // //     //    بِالْغَيْبِ
    // //     //    \u0650          ِ
    // //     // -> \u0627          ا
    // //     //    \u0644          ل
    // //     //    \u0652          ْ
    // //     //
    // //     text = text.replaceAll(
    // //         searchedgham2,
    // //         `\u0650<span_class="${edghamClassName}">\u0627</span>\u0644\u0652`
    // //     );
    // // }

    // // const searchedgham3 = `\u0627\u064E\u06EC\u0644`;
    // // if (text.includes(searchedgham3)) {
    // //     //    اَ۬لصَّلَوٰةَ
    // //     //    \u0627         ا
    // //     //    \u064E         َ
    // //     //    \u06EC        ۬
    // //     // -> \u0644        ل
    // //     //
    // //     text = text.replaceAll(
    // //         searchedgham3,
    // //         `\u0627\u064E\u06EC<span_class="${edghamClassName}">\u0644</span>`
    // //     );
    // // }
    // const searchedgham2 = `\u0650\u0627\u0644`;
    // if (text.includes(searchedgham2)) {
    //     //    بِالْغَيْبِ
    //     //    \u0650          ِ
    //     // -> \u0627          ا
    //     //    \u0644          ل
    //     //
    //     text = text.replaceAll(
    //         searchedgham2,
    //         `\u0650<span_class="${edghamClassName}">\u0627</span>\u0644`
    //     );
    // }




    // const searchedgham4 = `\u064E\u0627\u0644`;
    // if (text.includes(searchedgham4)) {
    //     //   وَالذِينَ 
    //     //    \u064E        َ
    //     // -> \u0627        ا
    //     // -> \u0644        ل
    //     //
    //     text = text.replaceAll(
    //         searchedgham4,
    //         `\u064E<span_class="${edghamClassName}">\u0627</span>\u0644`
    //     );
    // }

    // const searchedgham5 = `\u064E\u0648\u0670`;
    // if (text.includes(searchedgham5)) {
    //     //   اَ۬لصَّلَوٰةَ  
    //     //    \u064E         َ
    //     // -> \u0648        و
    //     // -> \u0670         ٰ
    //     //
    //     text = text.replaceAll(
    //         searchedgham5,
    //         `\u064E<span_class="${edghamClassName}">\u0648</span>\u0670`
    //     );
    // }

    // const searchedgham6 = `\u0648\u0652`;
    // if (text.includes(searchedgham6)) {
    //     //   أُوْلَٰئِكَ
    //     // -> \u0648        و
    //     // -> \u0652         ْ
    //     //
    //     text = text.replaceAll(
    //         searchedgham6,
    //         `<span_class="${edghamClassName}">\u0648\u0652</span>`
    //     );
    // }


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