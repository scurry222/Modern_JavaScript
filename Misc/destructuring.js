//Arrays
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

// declare in order
const [gold, silver, bronze] = raceResults;

//switch order
const [silver, gold, bronze] = raceResults;

//first and fourth results

const [first, , , ,fourth] = raceResults;

//rest to collect the others

const [winner, ...others] = raceResults;


//Objects
const animal = {
    species: 'Tiger',
    genus: 'Panthera',
    family: 'Felidae(Cat)',
    order: 'Carnivora(Carnivore)',
    class: 'Mammalia(Mammal)',
    phylum: 'Chordata(Vertabrate)',
}

const {
    species,
    genus,
    time    //will be undefined
    } = animal;

// add new parameter and rest
const {
    kingdom: Animalia,
    class: Reptile,
    ...other
} = animal;


//Nested
const animals = [
    {
        species: 'Boar',
        order: 'Herbivore',
        class: 'Mammalia'
    },
    {
        species: 'Cat',
        order: 'Carnivore',
        class: 'Mammalia'
    },
    {
        species: 'Aligator',
        order: 'Carnivores',
        class: 'Reptile'
    }
]

// Grab second object's order
const [,{order}] = animals;

//parameters
// destructure in the parameters
const fullName = ({first, last}) => {
    return `${first} ${last}`;
}

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
}

fullName(runner); //"Eliud Kipchoge"


// destructure an array
const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json',
]

// unpack based on passed in parameters
function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`);
}
