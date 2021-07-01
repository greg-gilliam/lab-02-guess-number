export function compareNumbers(resetBtn, results, targetNumber, userGuessNum){
    if (targetNumber > userGuessNum) {
        results.textContent = 'Go higher!';
    } 
    else if (targetNumber < userGuessNum) {
        results.textContent = 'Your guess is too high';
    } 
    else {
        results.textContent = 'Bingo! You guessed right! Game over!';
        btn.disabled = true;
        resetBtn.style.visibility = 'visible';
    }

}
