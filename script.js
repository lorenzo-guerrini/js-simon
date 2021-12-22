const arrayLength = 5;
const numbersArray = randomArrayGen(arrayLength, 1, 100);

const container = document.getElementById("container");
container.innerHTML = numbersArray;
console.log(numbersArray);

//Genera un array con numeri random
function randomArrayGen(length, min, max) {
    let newArray = [];
    for (let i = 0; i < length; i++) {
        newArray.push(randomNumberGen(min, max))
    }

    return newArray;
}

//Genera numeri random
function randomNumberGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Countdown 
let startCountDown = setInterval(countDown, 1000);
let seconds = 5;
function countDown() {
    console.log(seconds);
    seconds--;
    if (seconds == 0) {
        console.log("Tempo scaduto!");
        const guessedNumbers = askNumbers(numbersArray);
        console.log("Hai indovinato i seguenti numeri: " + guessedNumbers)

        clearInterval(startCountDown);
    }
}

//Chiede in prompt i numeri e controlla se sono presenti in un array, restituisce un array con i numeri indovinati
function askNumbers(array) {
    let guessedNumbers = [];

    for (let i = 0; i < array.length; i++) {
        let input = parseInt(prompt("Inserisci un numero che hai visto"));

        if (isInArray(input, array)) {
            guessedNumbers.push(input)
        }
    }
    return guessedNumbers;
}

//Controlla se un valore è presente in un array
function isInArray(value, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false;
}