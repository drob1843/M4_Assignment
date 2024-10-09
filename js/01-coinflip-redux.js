'use strict';

let coinFlip;
coinFlip = parseInt(prompt(`Enter a number from 1 to 10`));

for (let i = 0; i <= coinFlip; i++ ){

    let randomNumber = Math.round(Math.random());

    if (randomNumber === 0) {
        console.log('heads');
    } else {
        console.log('tails');
    }
    

}
