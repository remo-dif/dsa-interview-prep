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

module.exports = wordBreak;

if (require.main === module) {
  console.log(wordBreak("leetcode", ["leet", "code"])); // Output: true
  console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true
  console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // Output: false
}

// Time complexity: O(n^2) where n is the length of the string s.
// Space complexity: O(n) for the dp array and O(m) for the word set, where m is the number of words in the dictionary.
