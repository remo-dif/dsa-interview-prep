/**
 * Given an integer array nums, return an integer array counts where counts[i] is
 *  the number of smaller elements to the right of nums[i].

/**
 * Fenwick Tree (BIT) solution using sorting for coordinate compression
 * Time: O(n log n)
 */
var countSmaller = function (nums) {
  let n = nums.length;
  let result = new Array(n).fill(0);

  // ---- Coordinate Compression (sorting helper) ----
  let sorted = Array.from(new Set(nums)).sort((a, b) => a - b);
  let rank = new Map();
  for (let i = 0; i < sorted.length; i++) {
    rank.set(sorted[i], i + 1); // ranks start at 1 for BIT
  }

  // ---- Fenwick Tree implementation ----
  let bit = new Array(sorted.length + 1).fill(0);

  function update(i, delta) {
    while (i < bit.length) {
      bit[i] += delta;
      i += i & -i;
    }
  }

  function query(i) {
    let sum = 0;
    while (i > 0) {
      sum += bit[i];
      i -= i & -i;
    }
    return sum;
  }

  // ---- Traverse from right to left ----
  for (let i = n - 1; i >= 0; i--) {
    let r = rank.get(nums[i]);

    // Count how many smaller elements already seen
    result[i] = query(r - 1);

    // Add current element into BIT
    update(r, 1);
  }

  return result;
};
