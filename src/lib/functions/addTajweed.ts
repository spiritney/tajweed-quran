import { END_of_AYAH } from "$lib/constants";
import { taf5imErraaWaEdgham } from "./double/taf5imErraa+edgham";
import { edgham } from "./edgham";
import { edghamAfter } from "./edghamAfter";
import { el9al9ala } from "./el9al9ala";
import { ghona } from "./ghona";
import { maddJawaz } from "./maddJawaz";
import { maddLazem } from "./maddLazem";
import { taf5imErraa } from "./taf5imErraa";

export function addTajweed(textParam: string, withColor = true) {

    let text = textParam;

    if (withColor) {
        text = maddJawaz(text);
        text = maddLazem(text);
        text = taf5imErraa(text);
        text = edgham(text);
        text = ghona(text);
        text = el9al9ala(text);


        // After
        text = edghamAfter(text);

        // Double
        text = taf5imErraaWaEdgham(text);

    }

    text = text.replaceAll(END_of_AYAH, '');

    // add each word inside span with class kalemah
    // console.log(`line >${text}<`);

    text = text.split(' ').map(word => word != "" ? `<span class="kalemah">${word}</span>` : "").join(' ');

    text = text.replaceAll("_", ' ');

    return text;
}