// Desafio 1
function compareTrue(trueOrFalse1, truOrFalse2) {
  // seu código aqui
  let retorno;
  if ((trueOrFalse1) && (trueOrFalse2)) {
    retorno = true;
  } else {
    retorno = false;
  }
  return retorno;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangleArea = ((base * height) / 2);

  return triangleArea;
}

// Desafio 3
function splitSentence(stringUnica) {
  // seu código aqui
  let posicaoString = stringUnica.length;
  let palavraFormada = false;
  let palavraExtraida = [];
  let letraRetorno = '';
  let letraAtual = '';

  for (let index = 0; posicaoString > index; index += 1) {
    letraAtual = stringUnica[index];
    palavraformada = separaPalavra(letraAtual)
    if (palavraFormada) {
      letraRetorno = montaSaida();
      arrayString.push(palavraExtraida);
    }
  }
  arrayString.push(palavraExtraida);

  return arrayString;
}

function separaPalavra(letraAnalise) {
  if (letraAnalise === ' ') {
    return true;
  }
  if (letraAnalise != ' ') {
    return false;
  }
};

function montaSaida(concatenaPalavra, finaliza) {
  if (finaliza) {
    return concatenaPalavra;
  }
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  let tamanhoString = arrayStrings.length - 1;
  let ultimoString = arrayStrings[tamanhoString];
  let primeiraString = arrayStrings[0];
  let stringResultado = `${ultimoString}, ${primeiraString}`;
  return stringResultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  totalPoints = ((wins * 3) + (ties * 1));
  return totalPoints;
}

// Desafio 6
function highestCount() {

}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;
  let resultado = 'os gatos trombam e o rato foge';

  if (distCat1 !== distCat2) {
    resultado = distanciaRatoGato(cat1, cat2);
  }
  return resultado;
}

function distanciaRatoGato(cat1, cat2) {
  if (cat1 < cat2) {
    return 'cat1';
  }
  if (cat2 < cat1) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  let resultado = [];
  validade = false;
  let resto3 = false;
  let resto5 = false;
  let frase = '';

  for (let prop in arrayNumeros) {
    frase = '';
    resto3 = restCalculateTree(arrayNumeros[prop]);
    resto5 = restCalculateFive(arrayNumeros[prop]);
    frase += retornoAmbos(resto3, resto5);
    frase += retornaFizz(resto3, resto5);
    resultado.push(frase);
  }

  return resultado;
}

function restCalculateTree(numberArrayTree) {
  return (numberArrayTree % 3 === 0);
}

function restCalculateFive(numberArrayFive) {
  return (numberArrayFive % 5 === 0);
}

function retornoAmbos(boleanoA01, boleanoA02, texto) {
  let retorno = texto;
  if (boleanoA01 && boleanoA02) {
    retorno = 'fizzBuzz';
  }
  return retorno;
}

function retornaFizz(resto3, resto5, palavra) {

  palavraSaida = retornoFizz(resto3, resto5, palavra);
  if (palavraSaida === '') {
    palavraSaida = retornoBuzz(resto3, resto5, palavra);
  }
  return palavraSaida;
}

function retornoFizz(boleanoF01, boleanoF02, palavra) {
  let voltaFizz = palavra;
  if (boleanoF01 && !boleanoF02) {
    voltaFizz = 'fizz'
  }
  return voltaFizz;
}

function retornoBuzz(bolB01, bolB02, palavra) {
  let voltaBuzz = palavra;
  if (!bolB01 && bolB02) {
    voltaBuzz = 'buzz';
  }
  return voltaBuzz;
}

function retornaBug(stringBug) {
  if (stringBug === '') {
    stringBug = 'bug!'
  }
  return stringBug;
}


// Desafio 9
function encode() {
  // seu código aqui


}

function decode() {

}

// Desafio 10
function techList() {
  // seu código aqui
  const arrayTechSort = arrayTech.sort();
  let tamanhoTechSort = arrayTechSort.length;
  let objetoResultado = {};
  let obj;

  for (let index = 0; index < tamanhoTechSort; index += 1) {
    obj = criaObj("HTML", nameTech);
    objetoResultado.push(obj);
  }
  return objetoResultado;
}

function criaObj(tecnologia, pessoa) {
  let objeto = `{tech: ${tecnologia}, name: ${pessoa}`
  return objeto;
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
