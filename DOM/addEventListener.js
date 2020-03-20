// Use Event Listener on button
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log('CLICKED');
});

btn.addEventListener('click', function() {
    console.log('SECOND TIME');
});
// Can attach multiple listeners, even the same event

btn.addEventListener('mouseover', function() {
    btn.innerText = 'stop touching me!';
});

btn.addEventListener('mouseout', function() {
    btn.innerText = 'Click Me for events!';
});
