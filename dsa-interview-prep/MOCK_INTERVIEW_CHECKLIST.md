# Mock Interview Checklist

Use this as a spoken checklist during practice.

## Before Coding

- Restate the problem.
- Ask about input size and constraints.
- Confirm whether input can be empty, null, negative, duplicated, or unsorted.
- Name the brute-force solution.
- Name the optimized idea.

## While Coding

- Keep helper functions small.
- Use clear variable names: `left`, `right`, `slow`, `fast`, `start`, `end`, `seen`, `visited`.
- For linked lists, consider a dummy node early.
- For graphs, mark visited when enqueuing/pushing, not after repeated discovery.
- For DP, define what `dp[i]` or `dp[i][j]` means before filling it.

## After Coding

- Walk through one normal example.
- Walk through one edge case.
- State time complexity.
- State space complexity.
- Mention any tradeoff or alternate approach.

## Topic Prompts

Arrays and strings:

- What makes this a hash map, two-pointer, sliding-window, or prefix-sum problem?

Linked lists:

- Am I changing links safely?
- Do I need to update `head` or `tail`?

Trees:

- Is this preorder, inorder, postorder, or level order?
- Does the function return a value or mutate state?

Graphs:

- Is the graph directed or undirected?
- Can there be cycles?
- Do I need shortest path or any path?

Dynamic programming:

- What is the state?
- What is the transition?
- What is the base case?
- Can I compress space?

