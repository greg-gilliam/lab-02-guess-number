// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

import { compareNumbers } from '../utils.js';

test('userGuess is too High', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual - compareNumbers(1, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('userGuess is too low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual - compareNumbers(1, 0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('userGuess is right on', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual - compareNumbers(0, 0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
