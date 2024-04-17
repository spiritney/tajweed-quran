export function countOccurrences(text: string, searchString: string) {
    // Handle empty search string
    if (!searchString) {
      return 0;
    }
  
    let count = 0;
    let startIndex = 0;
  
    while ((startIndex = text.indexOf(searchString, startIndex)) !== -1) {
      count++;
      startIndex += searchString.length;
    }
  
    return count;
  }