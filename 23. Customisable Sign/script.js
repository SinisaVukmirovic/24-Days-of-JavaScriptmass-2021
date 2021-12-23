// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.
const signElem = document.querySelector('#sign');
const textInput = document.querySelector('#text-input');

const santaMsg = (e) => {
  if (textInput.value.length < 5) return;

  if(e.keyCode == 13) {
    signElem.textContent = `🎅 ${textInput.value}! ☃️`;
    resetInput();
  };
}

const resetInput = () => {
  textInput.value = '';
  textInput.focus();
}

textInput.addEventListener('keyup', santaMsg);

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.
