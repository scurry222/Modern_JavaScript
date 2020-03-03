const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers. map(function(num) {
    return num * 2;
});

const numDetail = numbers.map(function(n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
});

const abbrevs = words.map(function (w) {
    return w.toUpperCase().split('').join('.');
});

const books = [{
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }
];

const titles = books.map(function (b) {
    return b.title;
});

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles2 = nums.map(n => n * 2);

const parityList = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');
