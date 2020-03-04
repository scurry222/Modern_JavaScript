// Write a function to find the average value in an array of numbers

console.log(avg([0,50])) //25
console.log(avg([75, 76, 80, 95, 100])) //85.2

function avg(arr) {
    let sum = 0;
    arr.forEach((arr) =>  sum += arr);
    return sum / arr.length;
}