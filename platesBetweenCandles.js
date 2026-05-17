/**
 * 
There is a long table with a line of plates and candles arranged on top of it. You are given a 0-indexed string s consisting of characters '*' and '|' only, where a '*' represents a plate and a '|' represents a candle.

You are also given a 0-indexed 2D integer array queries where queries[i] = [lefti, righti] denotes the substring s[lefti...righti] (inclusive). For each query, you need to find the number of plates between candles that are in the substring. A plate is considered between candles if there is at least one candle to its left and at least one candle to its right in the substring.

For example, s = "||**||**|*", and a query [3, 8] denotes the substring "*||**|". The number of plates between candles in this substring is 2, as each of the two plates has at least one candle in the substring to its left and right.
Return an integer array answer where answer[i] is the answer to the ith query.

Example 1:

ex-1
Input: s = "**|**|***|", queries = [[2,5],[5,9]]
Output: [2,3]
Explanation:
- queries[0] has two plates between candles.
- queries[1] has three plates between candles.
Example 2:

ex-2
Input: s = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
Output: [9,0,0,0,0]
Explanation:
- queries[0] has nine plates between candles.
- The other queries have zero plates between candles.
 */

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */

function platesBetweenCandles(s, queries) {
  const n = s.length;

  const plates = new Array(n + 1).fill(0);
  const left = new Array(n);
  const right = new Array(n);

  // Prefix sum of plates
  for (let i = 0; i < n; i++) {
    plates[i + 1] = plates[i] + (s[i] === "*");
  }

  // Nearest left candle
  for (let i = 0, last = -1; i < n; i++) {
    if (s[i] === "|") last = i;
    left[i] = last;
  }

  // Nearest right candle
  for (let i = n - 1, last = -1; i >= 0; i--) {
    if (s[i] === "|") last = i;
    right[i] = last;
  }

  return queries.map(([l, r]) => {
    const start = right[l];
    const end = left[r];

    if (start === -1 || end === -1 || start >= end) {
      return 0;
    }

    return plates[end] - plates[start];
  });
}

// Example usage:
console.log(
  platesBetweenCandles("**|**|***|", [
    [2, 5],
    [5, 9],
  ]),
); // Output: [2, 3]
console.log(
  platesBetweenCandles("***|**|*****|**||**|*", [
    [1, 17],
    [4, 5],
    [14, 17],
    [5, 11],
    [15, 16],
  ]),
); // Output: [9, 0, 0, 0, 0]

// Complexity Analysis:
// Time Complexity: O(n + q), where n is the length of the string s and q is the number of queries. We traverse the string once to build the prefix sums and nearest candle arrays, and then we process each query in constant time.
// Space Complexity: O(n), where n is the length of the string s. We use additional space for the prefix sums and nearest candle arrays.
