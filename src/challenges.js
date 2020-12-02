function compareTrue(valor1, valor2) {

    if (valor1 === true && valor2 === true) {
        return true;
    } else { return false }
}

let verdadeiro = true;
let falso = false;

console.log(compareTrue(verdadeiro, verdadeiro))

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2;

}
console.log(calcArea(10, 20))



// Desafio 3
function splitSentence(string) {
    return string.split(' ')
}
let teste3 = 'go trybe'
console.log(splitSentence(teste3));



// Desafio 4
function concatName(meuArray) {
    return `${meuArray[meuArray.length - 1]}, ${meuArray[0]}`
}

let nomes = ['paulo', 'joao', 'felipe', 'thiago'];
console.log(concatName(nomes));



// Desafio 5
function footballPoints(wins, ties) {

    return (wins * 3) + (ties * 1);

}
let vitorias = 5;
let empates = 2;

console.log(footballPoints(vitorias, empates))

// Desafio 6
function highestCount(meuArray) {

    let maiorNumero = meuArray[0];
    let numOfTimes = 0;

    for (let index = 0; index < meuArray.length; index += 1) {
        if (meuArray[index] > maiorNumero) {
            maiorNumero = params[index]
        }
    };

    for (let index2 = 0; index2 < meuArray.length; index2 += 1) {
        if (meuArray[index2] === maiorNumero) {
            maiorNumero = meuArray[index2]
            numOfTimes += 1
        }
    }
    return numOfTimes
}

let repeteMaiorNumero = [9, 1, 2, 3, 9, 5, 7, 9, 9, 9];
console.log(highestCount(repeteMaiorNumero));

// Desafio 7
function catAndMouse() {
    // seu código aqui
}

// Desafio 8
function fizzBuzz() {
    // seu código aqui
}

// Desafio 9
function encode() {
    // seu código aqui
}
function decode() {
    // seu código aqui
}

// Desafio 10
function techList() {
    // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
    // seu código aqui
}

// Desafio 12
function triangleCheck() {
    // seu código aqui
}

// Desafio 13
function hydrate() {
    // seu código aqui
}


module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    generatePhoneNumber,
    techList,
    highestCount,
    hydrate,
    splitSentence,
    triangleCheck,
}
