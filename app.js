// import functions and grab DOM elements
const guessButton = document.getElementById('guess-btn');
// initialize state
const userGuess = document.getElementById('user-guess');
const targetNumber = Math.floor(Math.random() * 20);  
let guessesRemaining = 4;
// set event listeners 
guessButton.addEventListener('click', ()=> {
    console.log(userGuess, targetNumber, guessesRemaining);
    const userGuessNum = Number(userGuess);
});
  // get user input

  // use user input to update state 
  // update DOM to reflect the new state
