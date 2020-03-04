// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0. Return an array
// that includes both values that sum to zero or undefined if a pair does not
// exist.

function sumZero(arr) {
    let end = arr.length - 1;
    let start = 0;

    while (start < end) {
        let sum = arr[start] +  arr[end];

        if (sum == 0) return ([arr[start], arr[end]]);

        else if (sum > 0) end--;

        else start++;
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 2, 3]));
console.log(sumZero([1, 2, 3]));
