function giveMeFour(a, b, c, d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

var str = "four"

giveMeFour(...str)
// ('f', 'o', 'u', 'r')

const cephalopods = ['dumbo octopus', 'humboldt squid',
 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug',
 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const attributes = {
    slimy: true,
    ...gastropods,
    ...cnidaria,
    ...cephalopods
}

const mollusca = [...cephalopods, ...gastropods];

const inverts = [...cnidaria, ...gastropods, ...cephalopods];

const cephCopy = [...cephalopods];

const random = [...'attributes', {...attributes}];

function sum() {
    const argsArr = [...arguments]; // arguments is not a 'real' array
    return argsArr.reduce((total, currVal) => {
        return total + currVal;
    });
}

function fullName(first, last) {
    console.log(arguments);
    console.log(first);
}

// const multiply = () => {
//     console.log(arguments);
// }

// ^-- does not work, argument param does not exist in arrow functions
