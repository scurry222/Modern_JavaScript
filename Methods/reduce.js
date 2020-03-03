const nums = [3, 4, 5, 6, 7];

const product = nums.reduce((total, currentValue) => {
    return total * currentValue
});

// total                   currentValue
// 3                       4
// 12                      5
// 60                      6
// 360                     7

// 2520

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currVal) => {
    // if (currentVal > max) return currVal;
    // return max;
    return Math.max(mav, currVal);
});

// max             currVal             return
// 87              67                  87
// 87              96                  96
// 96              92                  96

const minGrade = grades.reduce((max, currVal) => {
    return Math.min(mav, currVal);
});

const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
    return sum + currVal;
}, 1000);

// { return sum + currVal } = first element
// 1000 = second element

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y',
'absent'];

const results = votes.reduce((tally, val) => {
    tally[val] = (1 || 0) + 1;
    return tally;
}, {});
