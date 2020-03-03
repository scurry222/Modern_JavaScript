const books = [{
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25,
        genres: ['fiction', 'fantasy'],
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genres: ['fiction', 'fantasy'],
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction'],
    },
    {
        title: 'Blue Planet',
        authors: 'David Attenborough',
        rating: 4.41,
        genres: ['non-fiction', 'documentary'],
    },
    {
        title: 'Lord of the Flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction'],
    },
];

const fantasyBooks = books.filter(book => { book.genres.includes['fantasy'] })
const query = 'The';
const results = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
});