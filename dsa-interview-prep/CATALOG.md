# Book-Aligned Catalog

Legend:

- `Ready`: good for rehearsal after minor cleanup
- `Review`: algorithm mostly useful, but has correctness, style, export, or testing issues
- `Missing`: useful book/interview topic not yet covered in this workspace

## Complexity and JavaScript Fundamentals

| Status | File | What to rehearse |
| --- | --- | --- |
| Review | `fibonacci.js` | Iteration, recurrence, off-by-one checks, complexity |

Missing practice:

- Big O comparison examples
- Common JS collection costs: `Array`, `Map`, `Set`, object

## Arrays and Strings

| Status | File | Topic |
| --- | --- | --- |
| Ready | `twoSum.js` | Hash map lookup |
| Ready | `duplicates.js` | Set-based deduplication |
| Review | `palindrome.js` | Expand around center, numeric palindrome |
| Ready | `platesBetweenCandles.js` | Prefix sums and nearest-bound arrays |
| Review | `findMedianSortedArrays.js` | Median of two sorted arrays, currently sort-based |
| Ready | `compressionDecompression.js` | Stack parsing |

Missing practice:

- Sliding window: longest substring without repeats, min window substring
- Two pointers: container with most water, three sum
- Matrix traversal

## Stacks, Queues, and Deques

| Status | File | Topic |
| --- | --- | --- |
| Review | `linkedliststack.js` | Stack using linked list |
| Review | `queue.js` | Queue using linked list |
| Ready | `compressionDecompression.js` | Stack for nested expressions |

Missing practice:

- Valid parentheses
- Monotonic stack
- Circular queue or deque

## Linked Lists

| Status | File | Topic |
| --- | --- | --- |
| Review | `linkedlist.js` | Singly linked list operations |
| Ready | `mergeTwoList.js` | Merge two sorted lists |
| Ready | `mergeKList.js` | Pairwise merge k sorted lists |
| Review | `NthNode.js` | Nth from end and remove nth from end |
| Ready | `swapPairs.js` | Pair swapping |
| Ready | `ReverseKGroup.js` | Reverse nodes in k-group |
| Ready | `rotateRight.js` | Circular list rotation |
| Review | `deleteDuplicates.js` | Duplicate removal with dummy node |

Missing practice:

- Cycle detection
- Intersection of two linked lists
- Reverse entire linked list

## Sets, Dictionaries, Maps, and Hashes

| Status | File | Topic |
| --- | --- | --- |
| Ready | `twoSum.js` | Map from value to index |
| Ready | `duplicates.js` | Set uniqueness |
| Review | `countSmaller.js` | Coordinate compression with `Map` |

Missing practice:

- Hash table implementation
- Anagram grouping
- Frequency counter patterns

## Recursion

| Status | File | Topic |
| --- | --- | --- |
| Ready | `hanoi.js` | Classic recursive decomposition |
| Review | `fibonacci.js` | Iterative recurrence |
| Ready | `diffWaysToCompute.js` | Recursive expression splitting with memoization |
| Ready | `phone-numbers.js` | Backtracking combinations |

Missing practice:

- Recursive tree traversal returning arrays
- Subsets and permutations

## Trees

| Status | File | Topic |
| --- | --- | --- |
| Review | `binarysearchtree.js` | BST insert, search, min/max, delete, traversal |
| Review | `sortedListToBST.js` | Convert sorted linked list to balanced BST |

Missing practice:

- Tree height/depth
- Validate BST
- Lowest common ancestor
- Level-order traversal returning nested arrays
- Heap implementation

## Graphs

| Status | File | Topic |
| --- | --- | --- |
| Review | `graph.js` | Adjacency list, BFS, DFS, path search |

Missing practice:

- Connected components
- Shortest path in unweighted graph
- Topological sort
- Dijkstra

## Sorting and Searching

| Status | File | Topic |
| --- | --- | --- |
| Ready | `mergesort.js` | Divide and conquer sorting |
| Review | `quicksort.js` | Pivot selection and partitioning |
| Review | `findMedianSortedArrays.js` | Binary-search median target, currently not optimal |
| Ready | `maxTwoEvents.js` | Binary search over sorted intervals |

Missing practice:

- Binary search template
- Search rotated sorted array
- Lower bound / upper bound helpers
- Heap sort or priority queue

## Algorithm Design Techniques

| Status | File | Topic |
| --- | --- | --- |
| Ready | `climbStairs.js` | 1D DP |
| Ready | `wordBreak.js` | Boolean DP over string prefixes |
| Ready | `wordBreak2.js` | Memoized DFS variant |
| Ready | `regular-expression-matching.js` | 2D DP |
| Ready | `knapsack.js` | 0/1 knapsack DP |
| Ready | `diffWaysToCompute.js` | Divide and conquer plus memoization |
| Ready | `phone-numbers.js` | Backtracking |
| Ready | `maxTwoEvents.js` | Sort plus binary search |

Missing practice:

- Greedy intervals: merge intervals, meeting rooms
- DP with state compression
- BFS as shortest path

