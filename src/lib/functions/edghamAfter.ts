import { edghamClassName } from "$lib/constants";

export function edghamAfter(_text: string) {

    let text = _text;
    // console.log("🚀 ~ edghamAfter ~ _text:", _text)


    const searchedghamAfter1 = `<span_class="ghona">مِّ</span>ن <span_class="taf5im-erraa">رّ</span>`;
    if (text.includes(searchedghamAfter1)) {
        // console.log(searchedghamAfter1);

        //    هُديٗ
        // -> \u062F          د
        // -> \u064A          ي
        //    \u0657          ٗ
        text = text.replaceAll(
            searchedghamAfter1,
            `<span_class="ghona">مِّ</span><span_class="${edghamClassName}">ن </span><span_class="taf5im-erraa">رّ</span>`
        );
    }


    return text;
}