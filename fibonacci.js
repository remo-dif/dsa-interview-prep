/**
 *
 * F(0)=0,F(1)=1,F(n)=F(n−1)+F(n−2)
 *
 */

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 0; i < n; i++) {
    let temp = curr;
    curr += prev;
    prev = temp;
  }

  return curr;
}
