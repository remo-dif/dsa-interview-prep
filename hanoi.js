function towerOfHanoi(n, source, target, auxiliary, moves = []) {
    if (n === 1) {
        moves.push(`Move disk 1 from ${source} to ${target}`);
        return moves;
    }  

    towerOfHanoi(n - 1, source, auxiliary, target, moves);
    moves.push(`Move disk ${n} from ${source} to ${target}`);
    towerOfHanoi(n - 1, auxiliary, target, source, moves);
    return moves;
}

//Complexity Analysis:
// Time Complexity: O(2^n) - The number of moves required to solve the Tower of Hanoi problem doubles with each additional disk.
// Space Complexity: O(n) - The maximum depth of the recursion stack is n, where n is the number of disks.

module.exports = towerOfHanoi;

if (require.main === module) {
    const numberOfDisks = 3;
    const moves = towerOfHanoi(numberOfDisks, 'A', 'C', 'B');
    console.log(moves.join('\n'));
}
// Output:
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C  
// Move disk 1 from A to C
