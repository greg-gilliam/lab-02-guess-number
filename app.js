// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
const feedback = document.getElementById('feedback');
const guessButton = document.getElementById('guess-btn');
// initialize state
const userGuess = document.getElementById('user-guess');
const targetNumber = Math.floor(Math.random() * 20) + 1;  
let guessesRemaining = 4;
// set event listeners 
guessButton.addEventListener('click', ()=> {
    if (guessesRemaining === 0) 
        console.log(userGuess, targetNumber, userGuessNum, guessesRemaining);
    const userGuessNum = Number(userGuess);
});
  // get user input

  // use user input to update state 
  // update DOM to reflect the new state
