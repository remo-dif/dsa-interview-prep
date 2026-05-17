const str = "babad";

function longestPalindromicSubstring(s) {
  let start = 0,
    maxLength = 1;
  const n = s.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= 1; j++) {
      let low = i,
        high = i + j;
      while (low >= 0 && high < n && s[low] === s[high]) {
        if (high - low + 1 > maxLength) {
          start = low;
          maxLength = high - low + 1;
        }
        low--;
        high++;
      }
    }
  }

  return s.substring(start, start + maxLength);
}

console.log(longestPalindromicSubstring(str));

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr; 
};

module.exports = {
  longestPalindromicSubstring,
  isPalindrome,
};
