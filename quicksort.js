function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }  

    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}   

// Complexity Analysis:
// Time Complexity: O(n log n) on average - The array is divided in half with each recursive call, leading to a logarithmic number of levels, and each level processes all n elements.
// Space Complexity: O(log n) - The maximum depth of the recursion stack is log n in the average case.

module.exports = quickSort;

// Example usage:
if (require.main === module) {
    const array = [34, 7, 23, 32, 5, 62];
    const sortedArray = quickSort(array);
    console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
}
