const container = document.getElementById("container");
container.innerHTML = randomArrayGen(5, 1, 100);

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

