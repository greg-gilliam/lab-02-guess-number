export function compareNumbers(targetNumber, str, userGuess){
    console.log(targetNumber, userGuess);

    if (targetNumber === userGuessNum) {
        result.textContent = 'You got it! Game over!';
    } else if (targetNumber > userGuessNum) {
        result.textContent = 'Your guess is too high';
    } else {
        feedback.textContent = 'Your guess is too low';
    }

}
