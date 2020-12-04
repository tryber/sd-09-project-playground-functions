// Começando o projeto 2
// Desafio 1
function compareTrue(paramer1, paramer2) {
  return paramer1 && paramer2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(array) {
  let result = [array[array.length - 1]];
  for (let index = 0; index < 1; index += 1) {
    result.push(array[index]);
  }
  return result.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let repeat = 0;

  for (let i = 0; i < array.length; i += 1) {
    let number = array[i]
    if (count < number) {
      count = array[i]
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (count === array[j]) {
      repeat +=1
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if (distance > distance2) {
    return 'cat2'
  } else if (distance < distance2) {
    return 'cat1'
  }
  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(array) {
  let string = [];
  for (const key in array) {
    if (array[key] % 5 === 0 && array[key] % 3 === 0) {
      string.push("fizzBuzz")
    } else if (array[key] % 5 === 0) {
      string.push("buzz")
    } else if (array[key] % 3 === 0 && array[key] % 5 !== 0) {
      string.push("fizz")
    } else {
      string.push("bug!")
    }

  }
  return string;
}

// Desafio 9
function encode(paramer1) {
  let phrase = paramer1.split('')
  let numbers = [1, 2, 3, 4, 5]

  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === 'a') {
      phrase[index] = numbers[0]
    } else if (phrase[index] === 'e') {
      phrase[index] = numbers[1]
    } else if (phrase[index] === 'i') {
      phrase[index] = numbers[2]
    } else if (phrase[index] === 'o') {
      phrase[index] = numbers[3]
    } else if ((phrase[index] === 'u')) {
      phrase[index] = numbers[4]
    }
  }
  return phrase
}

function decode(paramer1) {
  let phrase = paramer1.split('')
  let letters = ['A', 'B', 'C', 'D', 'E']

  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === '1') {
      phrase[index] = letters[0]
    } else if (phrase[index] === '2') {
      phrase[index] = letters[1]
    } else if (phrase[index] === '3') {
      phrase[index] = letters[2]
    } else if (phrase[index] === '4') {
      phrase[index] = letters[3]
    } else if ((phrase[index] === '5')) {
      phrase[index] = letters[4]
    }
  }
  return phrase
}
console.log(decode("h3 th2r2!"));

// Desafio 10
let java = {
  tech: "javascript",
  nome: "Felipe",
};
let react = {
  tech: "react",
  nome: "Felipe",
};
let python = {
  tech: "python",
  nome: "Felipe",
};
let nodejs = {
  tech: "nodejs",
  nome: "Felipe",
};
function techList(array) {
  for (let key in array) {
  }
}

techList([java, react, python, nodejs]);

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
};
