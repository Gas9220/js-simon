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

    console.log("Random Numbers", numbers);
    return numbers;
}

function collectUserChoices(answerElement) {
    let userChoices = [];

    answerElement.forEach(answer => {
        userChoices.push(Number(answer.value))
    });

    console.log("User choice", userChoices);
    return userChoices;
}

function checkChoices(randomNumbers, answerElement) {
    let userChoices = collectUserChoices(answerElement);
    let correctAnswers = [];

    for (let index = 0; index < randomNumbers.length; index++) {
        if (randomNumbers[index] === userChoices[index]) {
            correctAnswers.push(userChoices[index]);
            answerElement[index].classList.add('correct-answer');
        } else {
            answerElement[index].classList.add('wrong-answer');
        }
    }

    setUI()

    console.log(correctAnswers)
    return correctAnswers;
}

function hideUI() {
    cardElements.forEach(card => {
        card.innerHTML = "*"
    });

    answerElement.forEach(answer => {
        answer.classList.remove('hidden');
    });
}

function updateUI() {
    counterText.innerText = `Memorizza questi numeri in ${counter} secondi`;

    if (counter > 0) {
        counter--
    } else {
        clearInterval(displayTimer);
        counterText.innerText = `Indovina i numeri`;
    }
}

function setUI() {
    for (let index = 0; index < cardElements.length; index++) {
        cardElements[index].innerText = randomNumbers[index]    
    }
}

//const result = checkChoices(randomNumbers, userChoices);

const counterElement = document.getElementById('counter');
const cardElements = document.querySelectorAll('.number');
const counterText = document.getElementById('counter-text');
const answerElement = document.querySelectorAll('.answer');
const confirmBtn = document.getElementById('confirm-btn');

console.log(cardElements)

let counter = 10

const randomNumbers = generateRandomNumber(5);
setUI()

const displayTimer = setInterval(updateUI, 1000)

const timer = setTimeout(hideUI, counter * 1000);


confirmBtn.addEventListener('click',
    function () {
        checkChoices(randomNumbers, answerElement)
    }
)