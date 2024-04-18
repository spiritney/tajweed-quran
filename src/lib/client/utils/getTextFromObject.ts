export function getTextFromObject(obj: any) {
  let text = ""

  if (!obj || !obj.tafsir) {
    return "";
  }

  for (const chapterKey in obj.tafsir) {

    const chapter = obj.tafsir[chapterKey];

    text += " " + chapter.text + "⭐";

  }

  return text;
}