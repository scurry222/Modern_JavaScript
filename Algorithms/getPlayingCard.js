// Write a getCard() function which returns a random playing card Object, like:
//     {
//         value: 'K'
//         suit: 'clubs'
//     }
//     Pick a random value from:
//     ----2,3,4,5,6,7,8,9,10,J,Q,K,A
//     Pick a random suit from:
//     ----clubs,hearts,spades,diamonds
//     return both in an object

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function getCard() {
    const value = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suit = ['clubs','hearts','spades','diamonds'];

    return { value: pick(value), suit: pick(suit) };
}

