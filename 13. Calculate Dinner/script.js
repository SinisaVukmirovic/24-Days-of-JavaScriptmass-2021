const btn = document.getElementById("btn")
let food = document.getElementById("food")

let  vegetarianCheck = document.querySelector('#vegetarian-input');
let NumberOfGuests = document.querySelector('#num-input');
// const NumberOfGuests = document.querySelector('#num-input');

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!
const calculareDinner = () => {    
    if (vegetarianCheck.checked) return food.innerText = 'nut roast';
    if (NumberOfGuests.value <= 4) return food.innerText = 'turkey';
    return food.innerText = 'goose';
}

btn.addEventListener('click', calculareDinner);

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

