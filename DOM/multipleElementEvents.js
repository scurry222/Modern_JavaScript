colors = [
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
];

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
