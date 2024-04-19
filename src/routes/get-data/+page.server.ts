// import { getDataAsText } from "$lib/data/getDataAsText";

// export const load = async () => {
//     getDataAsText()
// };

// import { transformSuratTextToPages } from "$lib/data/transformSuratTextToNormalPages";

// export const load = async () => {
//     transformSuratTextToPages()
// };


import { combineNormalPages } from "$lib/data/combineNormalPages";

export const load = async () => {
    combineNormalPages()
};