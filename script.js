getRandomNum = (min, max) => {
  return (Math.floor(Math.random()*(max - min+1)+min))
}

// Game variables
let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

// UI elelement
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Functions
setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
}

gameOver = (won, msg) => {
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable Input
  guessInput.disabled = true;
  // Change input border color to green
  guessInput.style.borderColor = color;
  // Let user know they won

  // Set message color to green
  message.style.color = color;
  setMessage(msg)

  // Play again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again'
}

// Assign UI Element
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', (event) => {
  if (event.target.className === 'play-again') {
    window.location.reload();
  }
})

// Listen for guess
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  // validate guess
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  else if (guess === winningNum) {
    gameOver(true, `${winningNum} is Correct, You Win`)
  } else {
    // Wrong number
    guessesLeft -= 1;

    // Check if guesses = 0;
    if (guessesLeft === 0) {
      // Game Lost
      gameOver(false, `You lost. The correct number is ${winningNum}`)

    } else {
      // Game continues - Wrong Answer

      // Change border color
      guessInput.style.borderColor = 'red';
      // Clear Input
      guessInput.value = '';
      // Set message
      setMessage(`${guess} is not correct, you have ${guessesLeft} guess left`, 'red')
    }
  }
});