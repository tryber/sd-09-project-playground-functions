// Desafio 1
function compareTrue(operador1, operador2) {
  if (operador1 === true && operador2 === true){
        return true;
    } else {
        return false;
    }
}

// Desafio 2
function calcArea(base, height) {
  let area= (base*height)/2
return area;
}

// Desafio 3
function splitSentence(string) {
  let frase = " "
  frase = string.split(" ");
  return frase;
}

// Desafio 4
let lista = ["a","b","c"];
function concatName(arrayRetorno) {
  lista= arrayRetorno = arrayRetorno[arrayRetorno.length-1] + ", " + arrayRetorno[0];
  return lista;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos= (wins*3) + ties;
    return pontos;
}

// Desafio 6
function highestCount(numeros) {
  numeros.sort();
  let maior = 0;
  let repeticao = 0;
  for (let contador=0;contador<=numeros.length;contador++){
if (numeros[contador]>maior){
  maior = numeros[contador];
}
  }
  for (let contador2=0;contador2<=numeros.length;contador2++){
    if(contador2===maior){
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1= mouse-cat1;
  let distanciaGato2= mouse-cat2;
if(distanciaGato1<distanciaGato2){
return "cat1";
} else if (distanciaGato2<distanciaGato1){
return "cat2";
}else{
return "os gatos trombam e o rato foge"
}
}


// Desafio 8
function fizzBuzz(numbers) {
  let retorno = [];
  for(let contador3=0;contador3<numbers.length;contador3++){
if(numbers[contador3] % 3 === 0 && numbers[contador3] % 5 != 0){
  retorno.push("fizz");
}else if (numbers[contador3] % 5 === 0 && numbers[contador3] % 3 !=0) {
  retorno.push ("buzz")
} else if (numbers[contador3] % 3 === 0 && numbers[contador3] % 5 === 0) {
  retorno.push ("fizzBuzz")
} else {
retorno.push ("bug!")
}
  }
  return retorno;
 
}

// Desafio 9
// solução encontrada no stackoverflow.
function encode(string) {
  let trocaLetras = { a: "1", e: "2", i: "3", o: "4", u: "5"};
  let resultado = "";
  resultado = string.replace(/[aeiou]/gi, (m) => trocaLetras[m]);
  return resultado;
}
function decode(string) {
  let trocaLetras = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
  let resultado = "";
  resultado = string.replace(/[12345]/gi, (m) => trocaLetras[m]);
  return resultado;
}

// Desafio 10
function techList(nomeTech, name) {
  let ordem = nomeTech.sort();
  let skills = ["Javascript","HTML","CSS"];
  if (nomeTech.length === 0) {
    return "Vazio!"
  }
  for (let techName of ordem) {
    skills.push({
      tech: techName,
      name: name,
    });
  }
  return skills;
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
