# Review Notes

These notes track what was cleaned up and what still matters for interview depth.

## Refactor Completed

- `linkedlist.js` now follows the book's singly linked list style with `LinkedList`, `LinkedListNode`, private state, `data`, `append`, `prepend`, `insert`, `removeAt`, `remove`, `indexOf`, `size`, `toString`, and `reverse`.
- `linkedliststack.js` and `queue.js` now follow the book's private-array implementations.
- `binarysearchtree.js` now follows the book's comparator-based BST structure.
- `graph.js` now follows the book's `Map`-backed adjacency-list structure and keeps BFS/DFS helpers for interviews.
- All root JavaScript files now export their main function or class.
- Example output is guarded behind `if (require.main === module)`.
- `quicksort.js`, `fibonacci.js`, `palindrome.js`, `sortedListToBST.js`, `deleteDuplicates.js`, `NthNode.js`, and `graph.js` had correctness or reuse issues fixed during the refactor.

## Remaining Interview-Depth Items

| File | Issue | Suggested fix |
| --- | --- | --- |
| `mergeKList.js` | Relies on recursive `mergeTwoLists`, so large lists can overflow the call stack. | Keep this for explanation, but prepare an iterative merge or min-heap version. |
| `findMedianSortedArrays.js` | Correct but not the expected hard-version complexity. | Prepare the binary partition solution for `O(log(min(m,n)))`. |
| `wordBreak2.js` | Function name duplicates `wordBreak.js` but returns boolean, not all segmentations as LeetCode Word Break II usually expects. | Rename locally or implement the sentence-returning variant. |
| `linkedliststack.js` | The filename says linked-list stack, but the implementation now follows the book's array-backed `Stack`. | Rename to `stack.js` in a future structural pass, or keep the filename for history. |

## Module and Reuse Cleanup

The repo now uses this pattern:

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

## Naming and Consistency

| File | Note |
| --- | --- |
| `linkedlist.js` | Book-style data structure nodes use `.data`. |
| Linked-list problem files | LeetCode-style problem nodes use `.val`, which is intentional for interview platform compatibility. |
| `linkedliststack.js` | Consider renaming to `stack.js` when you are ready for a file-organization pass. |

## Complexity Notes to Recheck

| File | Current note | Better interview note |
| --- | --- | --- |
| `findMedianSortedArrays.js` | Correct but sort-based. | Mention `O((m+n) log(m+n))`; for hard interview version, prepare `O(log(min(m,n)))`. |
| `compressionDecompression.js` | Says `O(n * m)`. | More precise: `O(n + outputLength)` time and `O(n + outputLength)` space depending on whether output counts. |
| `swapPairs.js` | Recursive version uses call stack. | Iterative is `O(1)`, recursive is `O(N)` stack. |

## Test Coverage Targets

Start with small manual tests or a simple Node test file for:

- Empty input
- Single element
- Duplicates
- Negative numbers
- Very large `k` for linked-list rotation
- Disconnected graph vertices
- Repeated operators and multi-digit numbers for expression parsing
