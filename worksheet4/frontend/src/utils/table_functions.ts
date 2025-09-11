/**
 * Function to sort data based on a sortKey, and whether the sorting should be reversed or not.
 *
 * @param tableData The data to sort. This is an array of objects
 * @param sortKey The key to sort by.
 * @param reverse True if we should reverse the order of sorting (sorts ascending if false, descending if true)
 * @returns Sorted array of data
 */
export function sortData<T>(
  tableData: T[],
  sortKey: keyof T,
  reverse: boolean
): T[] {
  // Sort data by the specified sortKey (ascending by default)
  const sortedData = tableData.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  // Reverse the sorted data if 'reverse' is true (descending order)
  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
}