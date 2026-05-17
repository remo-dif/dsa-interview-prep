/**
 * @param {string} expression
 * @return {number[]}
 */
function diffWaysToCompute(expression) {
  const memo = new Map();

  function compute(start, end) {
    const key = `${start}-${end}`;

    if (memo.has(key)) {
      return memo.get(key);
    }
    const results = [];
    for (let i = start; i < end; i++) {
      const char = expression[i];
      if (char === "+" || char === "-" || char === "*") {
        const leftResults = compute(start, i);
        const rightResults = compute(i + 1, end);
        for (const left of leftResults) {
          for (const right of rightResults) {
            if (char === "+") {
              results.push(left + right);
            } else if (char === "-") {
              results.push(left - right);
            } else if (char === "*") {
              results.push(left * right);
            }
          }
        }
      }
    }
    if (results.length === 0) {
      results.push(parseInt(expression.substring(start, end)));
    }
    memo.set(key, results);
    return results;
  }
  return compute(0, expression.length);
}

module.exports = diffWaysToCompute;

if (require.main === module) {
  const expression = "2*3-4*5";
  console.log(diffWaysToCompute(expression)); // Output: [-34, -14, -10, -10, 10]
}

// Complexity Analysis:
// Time Complexity: O(n^3) in the worst case, where n is the length of the expression. This is because we are splitting the expression at every operator and recursively computing results for left and right sub-expressions.
// Space Complexity: O(n^2) due to the memoization map storing results for sub-expressions.
