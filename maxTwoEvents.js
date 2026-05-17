// You are given a 2D integer array events where events[i] = [startDayi, endDayi, valuei].
// The ith event starts at startDayi and ends at endDayi, and if you attend this event,
// you will receive a value of valuei. You can choose at most two non-overlapping events to attend such that the sum
//  of their values is maximized.

function maxTwoEvents(events) {
  // Sort events by start time
  events.sort((a, b) => a[0] - b[0]);

  const n = events.length;

  // maxFromRight[i] = max value from i → end
  const maxFromRight = new Array(n);
  maxFromRight[n - 1] = events[n - 1][2];

  for (let i = n - 2; i >= 0; i--) {
    maxFromRight[i] = Math.max(maxFromRight[i + 1], events[i][2]);
  }

  let answer = 0;

  // Binary search: find first event with start > end
  function findNext(end) {
    let left = 0,
      right = n - 1;
    let index = n;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (events[mid][0] > end) {
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return index;
  }

  for (let i = 0; i < n; i++) {
    let [start, end, value] = events[i];

    // Take only this event
    answer = Math.max(answer, value);

    // Try to take a second event
    let next = findNext(end);

    if (next < n) {
      answer = Math.max(answer, value + maxFromRight[next]);
    }
  }

  return answer;
}

// Example usage:
const events = [
  [1, 3, 4],
  [2, 5, 3],
  [4, 6, 2],
];
console.log(maxTwoEvents(events)); // Output: 6 (attend events [1, 3, 4] and [4, 6, 2])

// Time complexity: O(n log n) due to sorting and binary search
// Space complexity: O(n) for the maxFromRight array