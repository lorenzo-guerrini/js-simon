//Variabile gameContainer
const gameContainer = document.getElementById("game-container");

//Lunghezza e variabile array;
const arrayLength = 5;
let numbersArray = [];

//Secondi di countdown
let seconds = 5;

//Crea testo iniziale e lo inserisce nel gameContainer
let regole = document.createElement("p");
regole.innerHTML = "Regole: <br> Avrai " + seconds + " secondi di tempo per memorizzare i numeri che appariranno sullo schermo. Scaduto il tempo, ti verrà chiesto di riscriverli uno per volta. <br> Premi Play per giocare!"
gameContainer.append(regole);

//Variabile playButton

const playButton = document.createElement("button");
playButton.innerHTML = "Play"
playButton.addEventListener("click", start);
gameContainer.append(playButton);

//Fa partire il gioco
function start() {
    numbersArray = randomArrayGen(arrayLength, 1, 100);
    gameContainer.innerHTML = numbersArray;
    console.log(numbersArray);
    startCountDown(seconds);
}

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

//Fa partire un countdown e restituisce true appena è finito
function startCountDown(seconds) {
    let guessedNumbers = [];
    const milliseconds = seconds * 999;

    setTimeout(function () {
        gameContainer.innerHTML = "";
    }, milliseconds)

    let newCountDown = setInterval(function () {
        console.log(seconds);
        seconds--;
        if (seconds == 0) {
            guessedNumbers = askNumbers(numbersArray);
            outcomePrinter(guessedNumbers);
            clearInterval(newCountDown);
        }
    }, 1000);
}

//Chiede in prompt i numeri e controlla se sono presenti in un array, restituisce un array con i numeri indovinati
function askNumbers(array) {
    gameContainer.innerHTML = "";
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

function outcomePrinter(guessedNumbers) {
    let outcome = document.createElement("div");
    const nGuessedNumbers = guessedNumbers.length;
    outcome.innerHTML = "Hai indovinato ";
    if (nGuessedNumbers == 1) {
        outcome.innerHTML += "1 numero su " + arrayLength + ": " + guessedNumbers;
    } else if (nGuessedNumbers > 0) {
        outcome.innerHTML += nGuessedNumbers + " numeri su " + arrayLength + ": " + guessedNumbers;
    } else {
        outcome.innerHTML = "Non hai indovinato nessun numero!"
    }
    gameContainer.append(outcome);
}