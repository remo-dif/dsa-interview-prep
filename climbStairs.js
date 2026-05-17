/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n <= 0) {
    return 0;
  }

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

module.exports = climbStairs;

if (require.main === module) {
  console.log(climbStairs(2)); // Output: 2
  console.log(climbStairs(3)); // Output: 3
  console.log(climbStairs(4)); // Output: 5
}

//Complexity Analysis:
// Time Complexity: O(n) - We compute the number of ways to climb stairs for each step from 2 to n.
// Space Complexity: O(n) - We use an array of size n+1 to store the number of ways to climb stairs for each step.
