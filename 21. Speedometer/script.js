const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time")
let currentLocation = ""
let timeTaken = 0

const neededSpeedBtn = document.querySelector('#neededSpeed');

let destination = [
    {
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
]

function calculateSpeed() {
    let speed = 0    
    currentLocation = select.value
    let journeyTime = +(time.value);    
    
    for (let i = 0; i < destination.length; i++) {
        if (currentLocation == destination[i].name) {
            let distance = destination[i].distanceFromPrevDestination;

            speed = Math.round(distance / journeyTime);
        }
    }
    journeyTime !== 0 ? speedometer.innerText = speed : speedometer.innerText = 'Journey time cannot be zero!';   
}

neededSpeedBtn.addEventListener('click', calculateSpeed);

// Task:
    // - Retrieve distance from previous destination from array of objects.
    // - Calculate speed and round speed to an integer (whole number).
    // - Display speed in speedometer paragraph.

// Stretch goals: 
// - Calculate average overall speed.
// - Display location as North Pole on pageload.
