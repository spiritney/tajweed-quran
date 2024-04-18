import { getTextFromObject } from "$lib/client/utils/getTextFromObject";

const page = 1;

const obj = {
    "tafsir": {
        "2_1": {
            "text": "الم"
        },
        "2_2": {
            "text": "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ"
        },
        "2_3": {
            "text": "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ"
        },
        "2_4": {
            "text": "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ"
        },
        "2_5": {
            "text": "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ"
        }
    }
}

console.log(getTextFromObject(obj));




export const source = [
    {
        type: "BASMALA",
        value: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ",
        page,
    },
    {
        type: "AYAH",
        value: `الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ⭐ الرَّحْمَٰنِ`,
        page,
    },
    {
        type: "AYAH",
        value: `الرَّحِيمِ ⭐ مَالِكِ يَوْمِ الدِّينِ ⭐`,
        page,
    },

    {
        type: "AYAH",
        value: `إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ⭐`,
        page,
    },

    {
        type: "AYAH",
        value: `اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ⭐ صِرَاطَ`,
        page,
    },

    {
        type: "AYAH",
        value: `الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ ⭐ غَيْرِ`,
        page,
    },
    {
        type: "AYAH",
        value: `الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ⭐`,
        page,
    },
]