// Segundo Projeto - VQV
// Playground Functions

// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(" ");
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let helper = array[array.length - 1];
  let holder = array[0];
  let answer = helper + ", " + holder;
  return answer;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let higher = array[0];
  let max = 0;
  for (let index in array) {
    if (array[index] >= higher) {
      higher = array[index];
      max = 0;
      for (let counter in array) {
        if (array[counter] === array[index]) {
          max += 1;
        }
      }
    }
  }
  return max;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let answer = "";
  let d1 = Math.abs(cat1 - mouse);
  let d2 = Math.abs(cat2 - mouse);
  if (d1 < d2) {
    answer = "cat1";
  } else if (d1 > d2) {
    answer = "cat2";
  } else {
    answer = "os gatos trombam e o rato foge";
  }
  return answer;
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let answer = [];
  let fizz = false;
  let buzz = false;
  for (let index = 0; index < array.length; index += 1) {
    fizz = false;
    buzz = false;
    if (array[index] % 3 === 0) {
      fizz = true;
    }
    if (array[index] % 5 === 0) {
      buzz = true;
    }
    if (fizz && buzz) {
      answer.push("fizzBuzz");
    } else if (fizz) {
      answer.push("fizz");
    } else if (buzz) {
      answer.push("buzz");
    } else {
      answer.push("bug!");
    }
  }
  return answer;
}

// Desafio 9
const code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};
const code2 = {
  1: "a",
  2: "e",
  3: "i",
  4: "o",
  5: "u",
};

function encode(message) {
  // seu código aqui
  let answer = "";
  let helper;
  for (let index = 0; index < message.length; index += 1) {
    helper = true;
    for (let counter in code) {
      if (message[index] === counter) {
        answer += code[counter];
        helper = false;
      }
    }
    if (helper) {
      answer += message[index];
    }
  }
  return answer;
}
function decode(message) {
  // seu código aqui
  let answer = "";
  let helper;
  for (let index = 0; index < message.length; index += 1) {
    helper = true;
    for (let counter in code2) {
      if (message[index] === counter) {
        answer += code2[counter];
        helper = false;
      }
    }
    if (helper) {
      answer += message[index];
    }
  }
  return answer;
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  if (tech.length === 0) {
    return "Vazio!";
  }
  let answer = [];
  let helper = tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    answer.push({ tech: helper[index], name: name });
  }
  return answer;
}

// Desafio 11
function generatePhoneNumber(number) {
  // seu código aqui
  if (number.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  let answer = "(";
  let helper;
  for (let index = 0; index < number.length; index += 1) {
    helper = 0;
    for (let counter in number) {
      if (number[index] === number[counter]) {
        helper += 1;
      }
    }
    if (helper >= 3 || number[index] < 0 || number[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    if (index === 2) {
      answer += ") ";
    }
    if (index === 7) {
      answer += "-";
    }
    answer += number[index];
  }
  return answer;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let answer = true;
  if (
    lineA >= lineB + lineC ||
    lineB >= lineA + lineC ||
    lineC >= lineA + lineB ||
    lineA <= Math.abs(lineB - lineC) ||
    lineB <= Math.abs(lineA - lineC) ||
    lineC <= Math.abs(lineA - lineB)
  ) {
    answer = false;
  }
  return answer;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let answer = "";
  let helper = 0;
  for (let index = 0; index < drinks.length; index += 1) {
    if (drinks[index] > 0 && drinks[index] < 9) {
      helper += parseInt(drinks[index], 10);
    }
  }
  answer += helper + " copos de água";
  return answer;
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
