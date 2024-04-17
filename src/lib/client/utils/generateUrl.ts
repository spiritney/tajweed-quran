export function generateUrl(pageRef: any, currentPage:number) {
    // Check if currentPage is within the provided pageRef data
    if (currentPage < 1 || currentPage > pageRef.length) {
      throw new Error("Invalid page number");
    }
  
    const currentPageData = pageRef[currentPage - 1]; // Get data for the requested page
    const [b_sura, b_aya] = currentPageData; // Destructure starting sura and aya
  
    // Calculate ending sura and aya based on current page data
    const [e_sura, e_aya] = currentPage === pageRef.length
      ? currentPageData
      : pageRef[currentPage]; // If last page, use same values
  
    // Build the URL with provided parameters and calculated sura/aya values
    return `https://quran.ksu.edu.sa/interface.php?ui=pc&do=tarjama&tafsir=ar_ayat&b_sura=${b_sura}&b_aya=${b_aya}&e_sura=${e_sura}&e_aya=${e_aya}&11`;
  }
  