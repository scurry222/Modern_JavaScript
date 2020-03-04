// Write a function called maxSubarraySum which accepts an array of integers
// and a number called n. The function should calculate the maximum sum of n
// consecutive elements in the array.

function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let temp = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    temp = maxSum;
    for (let i = num; i < arr.length; i++)
    {
        temp = temp - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, temp);
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));