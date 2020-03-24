

// Example pairings: 
// index: 1, 2, 3, 4, 5, 6
//        ^  ^  ^  ^  ^  ^
// pair:  1  2  3  4  5  6
//        &  &  &  &  &  &
//        2  1  5  2  3  3
//           &  &
//           4  6
// index of self must be in pairing

// colors[1] = [yellow, green]
// colors[2] = [green, yellow, purple]
// colors[3] = [blue, indigo, violet]
// colors[4] = [purple, green]
// colors[5] = [indigo, blue]
// colors[6] = [violet, blue]

// Simple Method
// index: 1, 2, 3, 4, 5, 6
//        ^  ^  ^  ^  ^  ^
//        1  2  3  4  5  6
//        &  &  &  &  &  &
//        5  3  2  2  6  1
//        &  &  &  &  &  &
//        6  4  4  3  1  5
colors = [
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
];
const pairs = [];

const createPairs = (colors) => {
    for (let i = 0; i < colors.length - 1; i++) {
        pairs.push(colors[i])
        pairs[i] = [];
        console.log(pairs[i]);
        for (let j = i; j < i + 2; j++) {
            pairs[i].push(colors[j]);
            console.log(pairs[i]);

        }

    }
}

colors.forEach(function(color, i) {
    const amountOfPairs = Math.floor(Math.random() * colors.length);
    for (let j = 0; j < amountOfPairs; j++) {

    }
});

const pickRandomColor = function() {
    let rand = colors[Math.floor(Math.random() * colors.length)];
    while(1) {
        if (this.style.backgroundColor !== rand) {
            this.style.backgroundColor = rand;
            break;
        } else
            rand = colors[Math.floor(Math.random() * colors.length)]
    }

}
const checkIfWin = function() {
    const boxes = document.querySelectorAll('.box');
    if (Object.values(boxes).every(box => 
        box.style.backgroundColor === 'green')) {
        const h1 = document.querySelector('h1');
        h1.style.color = 'green';
        h1.innerText = "YOU WIN!";
    }
}
const container = document.querySelector('#boxes');

for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', pickRandomColor);
    container.addEventListener('click', checkIfWin);
}
