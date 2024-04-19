

export const alBasmalah = `بِسْمِ اِ۬للَّهِ اِ۬لرَّحْمَٰنِ اِ۬لرَّحِيمِ\n`


export const maddJawazClassName = "madd-jawaz"
export const maddLazemClassName = "madd-lazem"
export const taf5imErraaClassName = "taf5im-erraa"
export const edghamClassName = "edgham"
export const ghonaClassName = "ghona"
export const el9al9alaClassName = "el9al9ala"

export const END_of_AYAH = "END_of_AYAH"


// Design
export const targetWidth = 380;
export const targetWidthBorders = 50;
export const marginParam = 50;
export const targetWidthWithoutMargin = targetWidth;

export const BASE_MASK_COLOR = '255,255,255';
export const COLOR_MASK = `rgba(${BASE_MASK_COLOR}, 0.9)`;
export const INIT_BG = `linear-gradient(90deg, ${COLOR_MASK} 0%, ${COLOR_MASK} 100%, rgba(${BASE_MASK_COLOR},0) 100%)`;
export const TRANSPERENCY_BG_MASK_ON_HOVER = 10; //diff 5%
export const GLOBAL_LINE_ATTR_BODY = "active_line"

export const STARTING_AYAH = "starting-ayah"
export const ENDING_AYAH = "ending-ayah"

// Animation
export const GLOBAL_IS_ANIMATING_ATTR_BODY = "is_animating"

export const TRANSPERENCY_BG_MASK_ON_ANIMATED = 11; //diff 5%

export const ANIMATED_BG = `linear-gradient(90deg, ${COLOR_MASK} 0%, ${COLOR_MASK} ${100 - TRANSPERENCY_BG_MASK_ON_ANIMATED
    }%, rgba(${BASE_MASK_COLOR},0) 100%)`;

// export const LINE_DURATION = 6000; // Duration of each line animation in milliseconds
export const LINE_DURATION = 6000; // Duration of each line animation in milliseconds
export const LINE_GAP = 0; // Duration between line animations in milliseconds


// Menu

export const GLOBAL_STYLES_ATTR_BODY = "GLOBAL_STYLES_ATTR_BODY"
export const FIX_SCALE_ATTR_BODY = "FIX_SCALE_ATTR_BODY"
export const ADD_MASKS_ATTR_BODY = "ADD_MASKS_ATTR_BODY"

/**
 * حروفه : «خُصّ ضَغْطٍ قِظْ» وتسمى أيضاً حروف الاستعلاء. وتفخم هذه الحروف في جميع الأحوال والمواضع.
 *  أقوى حروف التفخيم أو الإستعلاء هو الطاء ثم الضاد ثم الصاد ثم الظاء ثم القاف ثم الغين ثم الخاء.

 */
export const el7roufElEst3laa = [
    'ط',
    'ض',
    'ص',
    'ظ',
    'ق',
    'غ',
    'خ',
]

export const el7roufAlAbjadiya = [
    'أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ',
    'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص',
    'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق',
    'ك', 'ل', 'م', 'ه', 'و', 'ي',
    'ط', 'ض', 'ص', 'ظ', 'ق', 'غ', 'خ',
];


export const el7roufAlAbjadiyaWithoutelYaa = el7roufAlAbjadiya.filter(x => x !== 'ي');

export const fatha = `َ`
export const damma = `ُ`
export const kasra = `ِ`
export const sukun = `ْ`
export const shadda = `ّ`
export const mad = `ٰ`

export const alTachkieel = [fatha, damma, kasra, sukun, shadda, mad];


export const directoryPath = './src/lib/data/quran/normal-pages';
export const directoryToPagePath = './src/lib/data/quran/pages';
