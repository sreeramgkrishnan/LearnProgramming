/**
 * Learn to implement a JavaScript function determining whether a given number is odd or even.
 */

function isOddOrEven(number) {
    if(number % 2 == 0) {
        console.log(`${number} is an even number`);        
    } else {
        console.log(`${number} is an odd number`);
        
    }
}

let number = -1234;
if (number <= 0) {
    console.log(`Enter a value greater than 0 !`);    
} else {
    isOddOrEven(number);
}

