const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const regular = prices.sort();

const ascendingSort1 = prices.sort((a, b) => a - b); //mutates
const ascendingSort2 = prices.slice().sort((a, b) => a - b); //does not mutate


const descendingSort1 = prices.sort((a, b) => b - a); //mutates
const descendingSort2 = prices.slice().sort((a, b) => b - a); //does not mutate

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

const rating = books.sort((a, b) => a.rating - b.rating);
  