'use strict';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomNumber(numbersToGenerate) {
    let numbers = [];

    do {
        const randomNumber = getRandomInt(0, 100);

        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    } while (numbers.length < numbersToGenerate)

    console.log(numbers)
    return numbers;
}

generateRandomNumber(5);
