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

    console.log(numbers);
    return numbers;
}

function collectUserChoices(numbersToCollect) {
    let userChoices = [];

    while (userChoices.length < numbersToCollect) {
        const userChoice = Number(prompt(`Qual'era il numero in ${userChoices.length + 1} posizione`));
        userChoices.push(userChoice);
    }

    console.log(userChoices);
    return userChoices;
}

const randomNumbers = generateRandomNumber(5);
const userChoices = collectUserChoices(5);

function checkChoices(randomNumbers, userChoices) {
    let correctAnswers = [];

    for (let index = 0; index < randomNumbers.length; index++) {
        if (randomNumbers[index] === userChoices[index]) {
            correctAnswers.push(userChoices[index]);
        }       
    }

    console.log(correctAnswers)
    return correctAnswers;
}

const result = checkChoices(randomNumbers, userChoices);
