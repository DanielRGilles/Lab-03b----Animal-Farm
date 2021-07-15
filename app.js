// grab DOM elements
const h1El = document.getElementById('animal-name');
const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');
const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');


// set event listeners 
horseEl.addEventListener('click', () => {
    horseSound.play();
    h1El.textContent = 'Horse';

    

    
});

dogEl.addEventListener('click', () => {
    dogSound.play();
    h1El.textContent = 'Dog'
});

catEl.addEventListener('click', () => {
    catSound.play();
    h1El.textContent = 'Cat'
    
});