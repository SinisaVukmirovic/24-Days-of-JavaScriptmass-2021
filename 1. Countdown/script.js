const app = document.querySelector('.app');

const xmasDate = new Date('Dec 25, 2021 00:00:00').getTime();

const interval = setInterval(() => {
    const today = new Date().getTime();

    const remaining = xmasDate - today;

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));

    const daysElem = app.querySelector('#days');
    daysElem.innerText = days;

    // if coming soon date passed
    if (remaining < 0 ) {
        clearInterval(interval);
    }

}, 1000);