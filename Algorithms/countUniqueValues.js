// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in
// the array, but it will always be sorted.

function countUniqueValues(arr) {
    let j = 0;

    if (!arr.length) return (0);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    return (j + 1);
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
