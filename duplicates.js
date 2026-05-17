function removeDuplicates(arr) {
  const uniqueElements = new Set();

  return arr.reduce((acc, element) => {
    if (!uniqueElements.has(element)) {
      uniqueElements.add(element);
      acc.push(element);
    }
    return acc;
  }, []);
}

module.exports = removeDuplicates;

if (require.main === module) {
  const arrayWithDuplicates = [1, 2, 3, 2, 4, 1, 5, 3];
  const uniqueArray = removeDuplicates(arrayWithDuplicates);
  console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
}
