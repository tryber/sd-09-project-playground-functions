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
            maiorNumero = meuArray[index]
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
function catAndMouse(rato, gato1, gato2) {
    let cat1Distance = 0;
    let cat2Distance = 0;
    if (rato > gato1) {
        cat1Distance = (rato - gato1);
    } else {
        cat1Distance = (gato1 - rato);
    }

    if (rato > gato2) {
        cat2Distance = (rato - gato2);
    } else {
        cat2Distance = (gato2 - rato);
    }

    if (cat1Distance > cat2Distance) {
        return 'cat2';
    } else if (cat2Distance > cat1Distance) {
        return 'cat1';
    } else if (cat1Distance === cat2Distance) {
        return 'os gatos trombam e o rato foge';
    };
}

let rato = -200;
let gato1 = -1200;
let gato2 = 200;

console.log(catAndMouse(rato, gato1, gato2));

// Desafio 8
function fizzBuzz(buzzArray) {
    let arrayFizzBuzz = []

    for (let index = 0; index < buzzArray.length; index += 1) {
        if ((buzzArray[index] % 3) === 0 && (buzzArray[index] % 5) === 0) {
            arrayFizzBuzz.push('fizzBuzz')
        } else if ((buzzArray[index] % 3) === 0) {
            arrayFizzBuzz.push('fizz')
        } else if ((buzzArray[index] % 5) === 0) {
            arrayFizzBuzz.push('buzz')
        } else if ((buzzArray[index] % 3) !== 0 && (buzzArray[index] % 5) !== 0) {
            arrayFizzBuzz.push('bug!')
        }
    }
    return arrayFizzBuzz;
}
let multiplos = [2, 5, 15, 7, 9, 45];
console.log(fizzBuzz(multiplos));


// Desafio 9
function encode(myString) {

    myString = myString.split('a').join(1);
    myString = myString.split('e').join(2);
    myString = myString.split('i').join(3);
    myString = myString.split('o').join(4);
    myString = myString.split('u').join(5);

    return myString
}

let encodeString = 'amanhã vai fazer sol ou não'
console.log(encode(encodeString));



function decode(myString) {

    myString = myString.split('1').join('a');
    myString = myString.split('2').join('e');
    myString = myString.split('3').join('i');
    myString = myString.split('4').join('o');
    myString = myString.split('5').join('u');

    return myString
}

let decoding = '1m1nhã v13 f1z2r s4l 45 nã4';
console.log(decode(decoding));

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
