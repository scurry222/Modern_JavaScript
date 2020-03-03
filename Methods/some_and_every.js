const words = ['dog', 'dig', 'wag', 'dogs', 'pets'];

const smallWords = words.every(word => {
    return word.length === 3;
}) //false

const allDWords = words.every(word => word[0] === 'd'); //false
const someDWords = words.some(word => word[0] === 'd'); //true


const endingGWords = words.every(word => {
    const last = word.length - 1;
    return word[last] === 'g';
}); //false
