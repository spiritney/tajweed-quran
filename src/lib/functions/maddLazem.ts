import { maddLazemClassName } from "$lib/constants";

export function maddLazem(_text: string) {
    let text = _text;

    const searchmaddLazem0 = `آ`;
    if (text.includes(searchmaddLazem0)) {
    
        text = text.replaceAll(
            searchmaddLazem0,
            `<span_class="${maddLazemClassName}">${searchmaddLazem0}</span>`
        );
    }
    const searchmaddLazem1 = `\u0623\u064E\u0644\u064E\u0653\u0645\u0651\u0653\u0650\u06D6\u0020`;
    if (text.includes(searchmaddLazem1)) {
        // أَلَٓمِّٓۖ
        //    \u0623          أ
        //    \u064E           َ
        // -> \u0644          ل
        // -> \u064E           َ
        // -> \u0653           ٓ
        // -> \u0645          م
        // -> \u0651           ّ
        // -> \u0653           ٓ
        // -> \u0650           ِ
        //    \u06D6          ۖ
        //    \u0020          SPACE
        text = text.replaceAll(
            searchmaddLazem1,
            `\u0623\u064E<span_class="${maddLazemClassName}">\u0644\u064E\u0653\u0645\u0651\u0653\u0650</span>\u06D6\u0020`
        );
    }


    return text;
}