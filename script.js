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