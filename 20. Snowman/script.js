const inputs = document.querySelectorAll(".controls input");
const rootElem = document.querySelector(':root');

const inputForEyes = document.querySelector('#color');
const inputForNose = document.querySelector('#color3');
const inputForButtons = document.querySelector('#color2');
const inputForHat = document.querySelector('#color4');

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.
const updateColors = () => {
    rootElem.style.setProperty('--color', inputForEyes.value);
    rootElem.style.setProperty('--color3', inputForNose.value);
    rootElem.style.setProperty('--color2', inputForButtons.value);
    rootElem.style.setProperty('--color4', inputForHat.value);
}  

inputs.forEach(input => input.addEventListener('input', updateColors));

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.