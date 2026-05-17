/**
 * 
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 * 
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (digits.length === 0) return [];
  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];
  const backtrack = (index, path) => {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }
    const possibleLetters = digitToLetters[digits[index]];
    for (const letter of possibleLetters) {
      backtrack(index + 1, path + letter);
    }
  };
  backtrack(0, "");
  return result;
}

//Time complexity: O(3^m * 4^n), where m is the number of digits that map to 3 letters and n is the number of digits that map to 4 letters.
//Space complexity: O(3^m * 4^n) to store the result list.

// Example usage:
const digits = "23";
console.log(letterCombinations(digits)); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

