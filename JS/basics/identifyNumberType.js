/**
 * Learn to categorize a number as positive, negative, or zero using conditional statements in JavaScript.
 */

function identifyNumberType(input) {
    if (input == 0) {
        console.log(`${input} is neither positive nor negative number.`);
    } else if (input < 0) {
        console.log(`${input} is a negative number.`);
    } else {
        console.log(`${input} is a positive number.`);
    }

}

let inputNumber = 0;

identifyNumberType(inputNumber);