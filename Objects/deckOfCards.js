// Make function deck of cards object with
// methods to make it dynamic.

const myDeck = {
    deck: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    createDeck() {
        const {suits, values, deck} = this;
        for (let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({value, suit});
            }
        }
        return deck;
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawCards(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
        }
    },
    shuffle() {
        const { deck } = this;
       // Basic shuffle
        for (let i = 0; i < deck.length; i++) {
            // Start from 0, go forward
            let j = Math.floor(Math.random() * 52);
            // randomly pick any index
            [deck[i], deck[j]] = [deck[j], deck[i]];
            // swap current index with random index
        } 
        // Fisher-Yates shuffle
        // for (let i = deck.length - 1; i > 0; i--) {
            // Start from back, move to 0
            // let j = Math.floor(Math.random() * (i + 1));
            // [deck[i], deck[j]] = [deck[j], deck[i]];
            // Swap index with random index
    }
}
