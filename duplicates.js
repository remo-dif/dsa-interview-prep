const arrayWithDuplicates = [1, 2, 3, 2, 4, 1, 5, 3]; // Example array with duplicates

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

const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
