/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = new Map();

  function backtrack(start) {
    if (start === s.length) {
      return true; // Reached the end of the string successfully
    }
    if (memo.has(start)) {
      return memo.get(start); // Return cached result
    }
    for (let end = start + 1; end <= s.length; end++) {
      const word = s.substring(start, end);
      if (wordSet.has(word) && backtrack(end)) {
        memo.set(start, true); // Cache the result
        return true;
      }
    }
    memo.set(start, false); // Cache the result
    return false;
  }
  return backtrack(0);
}
