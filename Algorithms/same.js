// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has its
// corresponding value squared in the second array. The frequency of values
// must be the same.

function same(l1, l2) {
    // console.log(l1, l2);
    var dict = {}
    for (let i = 0; i < l1.length; i++) {
        if (dict[l1[i]]) {
            dict[l1[i]]++;
        } else 
            dict[l1[i]] = 1;
    }
    for (let j = 0; j < l2.length; j++) {
        if (Math.sqrt(l2[j]) in dict) {
            dict[Math.sqrt(l2[j])] -= 1;
        }
    }
    // console.log(dict)
    // console.log(Object.values(dict))
    console.log(Object.values(dict))
    for (let k in dict) {
        if (dict[k] != 0) {
            return false
        }
    }
    return true
}

console.log(same([1, 2, 3], [4, 1, 9]))
console.log(same([1, 2, 3], [1, 9]))
console.log(same([1, 2, 1], [4, 4, 1]))