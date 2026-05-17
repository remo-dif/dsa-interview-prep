/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true; // Base case: empty string can be segmented

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}

// Example usage:
const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict)); // Output: true

// Another example:
const s2 = "applepenapple";
const wordDict2 = ["apple", "pen"];
console.log(wordBreak(s2, wordDict2)); // Output: true

// Another example:
const s3 = "catsandog";
const wordDict3 = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s3, wordDict3)); // Output: false

// Time complexity: O(n^2) where n is the length of the string s.
// Space complexity: O(n) for the dp array and O(m) for the word set, where m is the number of words in the dictionary.
