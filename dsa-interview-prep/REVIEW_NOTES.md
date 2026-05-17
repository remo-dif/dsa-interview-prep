# Review Notes

These are the first fixes to make before turning the files into a clean reusable library or using them in mock interviews.

## Fixed Correctness Issues

| File | Fixed |
| --- | --- |
| `quicksort.js` | Corrected pivot index calculation and exported `quickSort`. |
| `graph.js` | Fixed `removeVertex`, moved `hasPathBFS` failure return outside the loop, and exported `Graph`. |
| `palindrome.js` | Declared the inner loop variable with `let` and exported both functions. |
| `sortedListToBST.js` | Added a `TreeNode` class, exported the conversion function, and corrected the complexity note. |
| `deleteDuplicates.js` | Added a `ListNode` constructor and exported the solution. |

## Remaining High Priority Review Items

| File | Issue | Suggested fix |
| --- | --- | --- |
| `graph.js` | `dfs`, `bfs`, and `hasPathDFS` assume the start/source vertex exists. | Add empty-result or `false` guards for missing vertices. |
| `mergeKList.js` | Relies on recursive `mergeTwoLists`, so large lists can overflow the call stack. | Keep this for explanation, but prepare an iterative merge or min-heap version. |
| `findMedianSortedArrays.js` | Correct but not the expected hard-version complexity. | Prepare the binary partition solution for `O(log(min(m,n)))`. |
| `wordBreak2.js` | Function name duplicates `wordBreak.js` but returns boolean, not all segmentations as LeetCode Word Break II usually expects. | Rename locally or implement the sentence-returning variant. |

## Module and Reuse Cleanup

Many files mix solution code with immediate example execution. For interview prep that is fine, but for a reusable local library it causes noisy imports.

Recommended pattern:

```js
function twoSum(nums, target) {
  // solution
}

module.exports = twoSum;

if (require.main === module) {
  console.log(twoSum([2, 7, 11, 15], 9));
}
```

Files that should add exports or guard examples:

- `mergesort.js`
- `quicksort.js`
- `hanoi.js`
- `fibonacci.js`
- `knapsack.js`
- `climbStairs.js`
- `wordBreak.js`
- `wordBreak2.js`
- `diffWaysToCompute.js`
- `duplicates.js`
- `palindrome.js`
- `phone-numbers.js`
- `regular-expression-matching.js`
- `compressionDecompression.js`
- `findMedianSortedArrays.js`
- `countSmaller.js`
- `maxTwoEvents.js`
- `platesBetweenCandles.js`
- `graph.js`
- most linked-list problem files

## Naming and Consistency

| File | Note |
| --- | --- |
| `linkedlist.js` | `LinkedListNode` is actually the linked-list class, not a node class. Rename later to `LinkedList`. |
| `binarysearchtree.js` | `BinarySearchTreeNode` is actually the tree class. Rename later to `BinarySearchTree`. |
| Linked-list problem files | Some use `.val`, while `linkedlist.js` uses `.value`. Pick one node shape for local testing. LeetCode-style files usually use `.val`. |
| `binarysearchtree.js` | Comment says "Post-order traversal" above `levelOrder`; rename the comment. |
| `queue.js` | `enqueue` comment says "Dequeue"; update the comment. |

## Complexity Notes to Recheck

| File | Current note | Better interview note |
| --- | --- | --- |
| `sortedListToBST.js` | Says `O(N)`, but the slow/fast middle search in each recursive call makes it `O(N log N)` for balanced lists. | Either say `O(N log N)`, or implement in-order simulation for true `O(N)`. |
| `findMedianSortedArrays.js` | Correct but sort-based. | Mention `O((m+n) log(m+n))`; for hard interview version, prepare `O(log(min(m,n)))`. |
| `compressionDecompression.js` | Says `O(n * m)`. | More precise: `O(n + outputLength)` time and `O(n + outputLength)` space depending on whether output counts. |
| `swapPairs.js` | Recursive space note says `O(1)` in one place. | Iterative is `O(1)`, recursive is `O(N)` stack. |

## Test Coverage Targets

Start with small manual tests or a simple Node test file for:

- Empty input
- Single element
- Duplicates
- Negative numbers
- Very large `k` for linked-list rotation
- Disconnected graph vertices
- Repeated operators and multi-digit numbers for expression parsing
