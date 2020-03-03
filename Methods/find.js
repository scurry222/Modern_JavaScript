let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]



const movie = movies.find(movie => {
    return movie.includes('Mrs.');
});

const movie2 = movies.find(m => {
    m.indexOf('Mrs.') === 0;
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

const goodRating = books.find(b => b.rating >= 4.3);
const neilBook = books.find(b => b.authors.includes('Neil Gaiman'));
