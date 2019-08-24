// Functions
setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
}

// Game variables
let min = 1;
let max = 10;
let winningNum = 2;
let guessesLeft = 3;

// UI elelement
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI Element
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  // validate guess
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Disable input
    guessInput.disabled = true;

    // change input border color to green
    guessInput.style.borderColor = 'green';

    // Let user know they won
    setMessage(`${winningNum} is , You Win`, 'green')
  }
});