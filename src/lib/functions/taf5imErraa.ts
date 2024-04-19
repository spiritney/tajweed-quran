import { countOccurrences } from "$lib/client/utils/countOccurrences";
import { getPureText } from "$lib/client/utils/getPureText";
import { alTachkieel, el7roufAlAbjadiyaWithoutelYaa, el7roufElEst3laa, kasra, taf5imErraaClassName } from "$lib/constants";
import { taf5imErra7roufEst3laa1 } from "./taf5imErra7roufEst3laa1";

export function taf5imErraa(_text: string) {
    let text = _text;


    // console.log(text);
    
    // تفخم الراء في الأحوال التالية:

    // إذا كانت مفتوحة، ...مثل: (رَحمة) 
    const searchtaf5imErraa1 = `رَ`;
    if (getPureText(text).includes(searchtaf5imErraa1)) {
       
        
        text = text.replaceAll(
            searchtaf5imErraa1,
            `<span_attr-qn="1"_class="${taf5imErraaClassName}">${searchtaf5imErraa1}</span>`
        );
    }
    if (getPureText(text).includes(searchtaf5imErraa1) && !text.includes(searchtaf5imErraa1)) {
        alert("please fix searchtaf5imErraa1" + " - " + text)
        const msg = `
        searchtaf5imErraa1: ${searchtaf5imErraa1}
        text: ${text}
        text.includes(searchtaf5imErraa1): ${text.includes(searchtaf5imErraa1)}
        getPureText(text): ${getPureText(text)}
        <span_attr-qn="1"_class="${taf5imErraaClassName}">${searchtaf5imErraa1}</span>

        `
        console.log(msg);
    }

    // أو مشددة مثل: (الرَّاشدون).
    // ر  ّ  َ
    // /reh/afii57457/afii57454
    const searchtaf5imErraa2 = `رَّ`;
    if (getPureText(text).includes(searchtaf5imErraa2)) {
        text = text.replaceAll(
            searchtaf5imErraa2,
            `<span_attr-qn="2"_class="${taf5imErraaClassName}">${searchtaf5imErraa2}</span>`
        );
    }
    if (getPureText(text).includes(searchtaf5imErraa2) && !text.includes(searchtaf5imErraa2)) {
        alert("please fix searchtaf5imErraa2" + " - " + text)
    }

    // إذا كانت مضمومة، مثل: (رُمّان ـ رُزقوا ـ الرُّكَّع).
    const searchtaf5imErraa3 = `رُ`;
    if (getPureText(text).includes(searchtaf5imErraa3)) {
        text = text.replaceAll(
            searchtaf5imErraa3,
            `<span_attr-qn="3"_class="${taf5imErraaClassName}">${searchtaf5imErraa3}</span>`
        );
    }
    if (getPureText(text).includes(searchtaf5imErraa3) && !text.includes(searchtaf5imErraa3)) {
        alert("please fix searchtaf5imErraa3" + " - " + text)
    }

    // إذا كانت ساكنة بعد ضم،... مثل: (غُرْفة).
    //
    const searchtaf5imErraa4 = `ُرْ`;
    if (getPureText(text).includes(searchtaf5imErraa4)) {
        text = text.replaceAll(
            searchtaf5imErraa4,
            `ُ<span_attr-qn="4"_class="${taf5imErraaClassName}">رْ</span>`
        );
    }
    if (getPureText(text).includes(searchtaf5imErraa4) && !text.includes(searchtaf5imErraa4)) {
        alert("please fix searchtaf5imErraa4" + " - " + text)
    }


    // إذا كانت ساكنة بعد فتح،... مثل: (قَرْية).
    const searchtaf5imErraa5 = `َرْ`;
    if (getPureText(text).includes(searchtaf5imErraa5)) {
        text = text.replaceAll(
            searchtaf5imErraa5,
            `َ<span_attr-qn="5"_class="${taf5imErraaClassName}">رْ</span>`
        );
    }
    if (getPureText(text).includes(searchtaf5imErraa5) && !text.includes(searchtaf5imErraa5)) {
        alert("please fix searchtaf5imErraa5" + " - " + text)
    }

    // إذا كانت ساكنة بعد كسر عارض،... مثل: (ارْجعوا _ أمِ ارْتابوا).
    const searchtaf5imErraa6 = `ارْ`;
    if (getPureText(text).includes(searchtaf5imErraa6)) {
        text = text.replaceAll(
            searchtaf5imErraa6,
            `ا<span_attr-qn="6"_class="${taf5imErraaClassName}">رْ</span>`
        );
    }
    if (getPureText(text).includes(searchtaf5imErraa6) && !text.includes(searchtaf5imErraa6)) {
        alert("please fix searchtaf5imErraa6" + " - " + text)
    }


    // إذا كانت ساكنة بعد كسر أصلي وأتى بعدها حرف استعلاء في كلمة واحدة... مثل: (قِرْطاس _ مِرْصاداً).
    /**
     * حروفه : «خُصّ ضَغْطٍ قِظْ» وتسمى أيضاً حروف الاستعلاء. وتفخم هذه الحروف في جميع الأحوال والمواضع.
     *  أقوى حروف التفخيم أو الإستعلاء هو الطاء ثم الضاد ثم الصاد ثم الظاء ثم القاف ثم الغين ثم الخاء.
     */
    el7roufElEst3laa.forEach((el) => {
        text = taf5imErra7roufEst3laa1(text, el);
    })

    // إذا كانت ساكنة بعد سكون غير الياء،... مثل: (الأمُورْ _ القَدْرْ).
    // هذا المثال ليس فيه تشكيل
    el7roufAlAbjadiyaWithoutelYaa.forEach((el) => {
        const searchtaf5imErraa8 = `${el}${''}رْ`
        if (getPureText(text).includes(searchtaf5imErraa8)) {
            text = text.replaceAll(
                searchtaf5imErraa8,
                `${el}${''}<span_attr-qn="7"_class="${taf5imErraaClassName}">رْ</span>`
            );
        }
        if (getPureText(text).includes(searchtaf5imErraa8) && !text.includes(searchtaf5imErraa8)) {
            alert("please fix searchtaf5imErraa8 المثال ليس فيه تشكيل" + " - " + text)
        }
    })

    // هذا المثال بالتشكيل
    el7roufAlAbjadiyaWithoutelYaa.forEach((el) => {
        alTachkieel.forEach((tachkeel) => {
            const searchtaf5imErraa8 = `${el}${tachkeel}ر`

            if (getPureText(text).includes(searchtaf5imErraa8)) {

                if (!text.includes(searchtaf5imErraa8) && countOccurrences(getPureText(text), searchtaf5imErraa8) > 1) {
                    console.log(getPureText(text).includes(searchtaf5imErraa8));
                    console.log(text.includes(searchtaf5imErraa8));
                    console.log(countOccurrences(getPureText(text), searchtaf5imErraa8));

                    const msg = `please fix searchtaf5imErraa8
                    المثال بالتشكيل
                    el7roufAlAbjadiyaWithoutelYaa: ${el}
                    tachkeel: ${tachkeel}
                    searchtaf5imErraa8: ${searchtaf5imErraa8}
                    getPureText(text): ${getPureText(text)}
                    text: ${text}
                    `
                    // const msg = "please fix searchtaf5imErraa8 المثال بالتشكيل" + " - \n" + getPureText(text) + " - \n" + text
                    console.error(msg);
                    // alert(msg)
                }

                text = text.replaceAll(
                    searchtaf5imErraa8,
                    `${el}${tachkeel}<span_attr-qn="8"_class="${taf5imErraaClassName}">ر</span>`
                );
            }


        })
    })


    /**
     * إذا كانت ساكنة         رْ
     *  وما قبلها كسر أصلي    kasra
     * 
     * وما بعدها حرف استعلاء غير مكسور في كلمة
     */
    el7roufElEst3laa.forEach((el7arfElEst3laa) => {
        alTachkieel.filter((tachkeel) => tachkeel !== kasra).forEach((tachkeel) => {
            const searchtaf5imErraa9 = `${kasra}رْ${el7arfElEst3laa}${tachkeel}`
            if (getPureText(text).includes(searchtaf5imErraa9)) {
                text = text.replaceAll(
                    searchtaf5imErraa9,
                    `${kasra}<span_attr-qn="9"_class="${taf5imErraaClassName}">رْ</span>${el7arfElEst3laa}${tachkeel}`
                );
            }
        })
    })


    // const searchtaf5imErraa1 = `\u0627\u0020\u0631\u064E\u064A\u0652`;
    // if (text.includes(searchtaf5imErraa1)) {
    //     //   رَيْبَۖ
    //     //    \u0627          ا
    //     //    \u0020          SPACE
    //     // -> \u0631          ر
    //     // -> \u064E           َ
    //     //    \u064A          ي
    //     //    \u0652           ْ
    //     text = text.replaceAll(
    //         searchtaf5imErraa1,
    //         `\u0627\u0020<span_class="${taf5imErraaClassName}">\u0631\u064E</span>\u064A\u0652`
    //     );
    // }
    // const searchtaf5imErraa1 = `\u0627\u0020\u0631\u064E`;
    // if (text.includes(searchtaf5imErraa1)) {
    //     //   رَيْبَۖ
    //     //    \u0627          ا
    //     //    \u0020          SPACE
    //     // -> \u0631          ر
    //     // -> \u064E           َ
    //     text = text.replaceAll(
    //         searchtaf5imErraa1,
    //         `\u0627\u0020<span_class="${taf5imErraaClassName}">\u0631\u064E</span>`
    //     );
    // }


    // const searchtaf5imErraa2 = `\u0650\u0631\u064E`;
    // if (text.includes(searchtaf5imErraa2)) {
    //     //   وَبِالْأٓخِرَةِ
    //     //    \u0650          ِ
    //     // -> \u0631          ر
    //     // -> \u064E           َ
    //     text = text.replaceAll(
    //         searchtaf5imErraa2,
    //         `\u0650<span_class="${taf5imErraaClassName}">\u0631\u064E</span>`
    //     );
    // }

    // const searchtaf5imErraa3 = `\u0020\u0631\u0651`;
    // if (text.includes(searchtaf5imErraa3)) {
    //     //   رَّبِّهِمْۖ 
    //     //    \u0020          SPACE
    //     // -> \u0631          ر
    //     // -> \u0651           ّ
    //     text = text.replaceAll(
    //         searchtaf5imErraa3,
    //         `\u0020<span_class="${taf5imErraaClassName}">\u0631\u0651</span>`
    //     );
    // }




    return text;
}