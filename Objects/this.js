// 'this' is the reference to the current execution scope.
function sayHi() {
    console.log("hi");
    console.log(this);
    //           ^-- Global scope - accesses window.
}

const greet = () => {
    console.log(this); // ...Except when it doesnt.
                       // Because execution context finishes, 'this' no longer
                       // references window.
}

// Using 'this' in methods
const person = {
    first: 'Scout',
    last: 'Curry',
    nickName: 'scoot',
    position: 'Web Stack Engineer',
    fullName() {
        console.log(this);
        //            ^-- References attributes and other properties of object.
        // So, this is possible:
        const { first, last, nickName } = this;
        //     ^-- destructure first for cleanliness
        return (`${first} ${last} AKA ${nickName}`);
    },
    printBio() {
        const fullName = this.fullName();
        console.log(`${fullName} is a supreme ${this.position}`);
    },
    // Arrow functions do not get their own 'this' (this doesn't work).
    greet: () => {
        console.log(this);
        console.log(`${this.nickName} says Hi!`);
    }
}

// The value of 'this' depends on the invocation context of the function that it
// is used in.

const printBio = person.printBio; // Doesn't work - 'this' is the window!

// If executing without a dot and some object to the left of it, the context is
// the window.

// Why don't arrow functions have their own 'this'?
// Example:

const badTexter = {
    phrases: ["hey", "that's crazy", "u up", "damn", "bored"],
    pickPhrase() {
        const {phrases} = this;
        const index = Math.floor(Math.random() * phrases.length);
        return phrases[index];
    },
    start() {
        console.log(this); // Set to the object
        // const that = this;
        // ^---
            //  Keep instance of 'this' to use for setInterval -
            // (not the best approach).
            // setInterval's 'this' will be window - since the
            // execution context is different.
        // setInterval(function(){
        //     console.log(that.pickPhrase())
        // }, 3000);
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000);
        // ^-- Arrow functions are good when we dont WANT our own 'this'!
        // Adds dynamic variable timerId to 'this'.
    },
    stop() {
        clearInterval(this.timerId);
    }
}