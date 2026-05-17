/**
 * Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:

The input

3[abc]4[ab]c

Would be output as

abcabcabcababababc

Other rules

Numbers can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa

One repetition can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab

Characters allowed as input include digits, small English letters and brackets [ ].

Digits are only to represent the amount of repetitions.

Letters are just letters.

Brackets are only part of the syntax of writing repeated substring.

Input is always valid, so no need to check its validity.
 */

function decompressString(s) {
  let stack = [];
  let currentNum = 0;
  let currentString = "";

  for (let char of s) {
    if (char >= "0" && char <= "9") {
      currentNum = currentNum * 10 + parseInt(char);
    } else if (char === "[") {
      stack.push(currentString);
      stack.push(currentNum);
      currentString = "";
      currentNum = 0;
    } else if (char === "]") {
      let num = stack.pop();
      let prevString = stack.pop();
      currentString = prevString + currentString.repeat(num);
    } else {
      currentString += char;
    }
  }

  return currentString;
}

module.exports = decompressString;

if (require.main === module) {
  console.log(decompressString("3[abc]4[ab]c")); // Output: "abcabcabcababababc"
  console.log(decompressString("2[3[a]b]")); // Output: "aaabaaab"
  console.log(decompressString("10[a]")); // Output: "aaaaaaaaaa"
}

// Complexity Analysis:
// Time Complexity: O(n * m), where n is the length of the input string and m is the maximum number of repetitions. In the worst case, if we have a large number of repetitions, it can lead to a significant increase in time complexity.
// Space Complexity: O(n), where n is the length of the input string. The stack can grow up to the size of the input string in the worst case, and the output string can also grow significantly depending on the number of repetitions.
