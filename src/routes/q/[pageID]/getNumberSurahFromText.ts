export function getNumberSurahFromText(text: string): number | null {
    const parts = text.split("_");
    if (parts.length === 6 && parts[2] === "SURAH") {
      try {
        return parseInt(parts[3]);
      } catch (error) {
        // Handle potential conversion errors (e.g., non-numeric characters)
        return null;
      }
    }
  
    return null;
  }
  