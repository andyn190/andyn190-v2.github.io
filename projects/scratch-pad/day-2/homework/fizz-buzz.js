// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // prints out 1 to 100
    for (let i = 1; i < 101; i++) {
    // if the number is divisible by 3 and 5 print FizzBuzz
    // if (i % 15 === 0) {
    //     console.log('FizzBuzz');
    // } else if (i % 5 === 0) {
    // // if the number is divisible by 5 print Buzz
    //     console.log('Buzz');
    // } else if (i % 3 === 0) {
    // // if the number is divisible by 3 print Fizz
    //     console.log('Fizz');
    // } else {
    //     console.log(i);
    // }
        console.log((i % 15 === 0) ? 'FizzBuzz' : (i % 5 === 0) ? 'Buzz' : (i % 3 === 0) ? 'Fizz' : i );
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}