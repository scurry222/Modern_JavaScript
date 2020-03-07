//pass variable arguments into function, call them 'nums'
function sum(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal;
    });
}

// declare any required arguments, call the rest of arguments titles
function fullName(first, last, ...titles) {
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
}

// Works with arrow functions
const multiply = (...nums) => {
    nums.reduce((total, currVal) => total * currVal)
}