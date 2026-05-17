// Knapsack problem implementation
// weights: array of item weights
// values: array of item values
// capacity: maximum weight capacity of the knapsack

function Knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1],
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][capacity];
}

// Example usage:
const weights = [10, 20, 30];
const values = [60, 100, 120];
const capacity = 50;

console.log(Knapsack(weights, values, capacity)); // Output: 220

// Complexity: O(n * capacity) where n is the number of items and capacity is the maximum weight capacity of the knapsack.
