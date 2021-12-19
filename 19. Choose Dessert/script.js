const btn = document.getElementById("btn")
const foodHolderElem = document.getElementById("foodHolder");

const apiUrl = 'https://foodish-api.herokuapp.com/api/images/dessert';

const findYum = async () => {
    foodHolderElem.innerHTML = '';

    const response = await fetch(apiUrl);
    const dessertsData = await response.json();
    // console.log(dessertsData);

    addDessert(dessertsData);
}

const addDessert = (data) => {
    let dessertImage = document.createElement('img');
    dessertImage.src = data.image;

    foodHolderElem.appendChild(dessertImage);
}

btn.addEventListener("click", findYum)

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/

