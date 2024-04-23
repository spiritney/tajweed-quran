export function replaceLast(str: string, search: string, replace: string) {
  const index = str.lastIndexOf(search);
  if (index !== -1) {
    return str.substring(0, index) + replace + str.substring(index + search.length);
  }
  return str;
}