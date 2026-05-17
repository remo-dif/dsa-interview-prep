/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target) {
  if (!Array.isArray(nums) || typeof target !== "number") {
    return []; // Return an empty array for invalid input.
  }

  // O(n) time, O(n) space
  const seen = new Map();
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const num = nums[i];
    const complement = target - num;

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(num, i);
  }

  return []; // Return an empty array if no solution is found (though the problem guarantees one solution).
}

// Example usage (runs only when executed directly).
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // [0, 1]

// Time complexity: O(n) - We traverse the array once.
// Space complexity: O(n) - In the worst case, we store all elements in the map.
