// Desafio 1
function compareTrue(operador1, operador2) {
  if (operador1 === true && operador2 === true){
        return true;
    } else {
        return false;
    }
}

// Desafio 2 ergerdgrtg
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

// Desafio 6.
function highestCount(numeros) {
  let maior = 0;
  let repeticao = 0;
  for (let contador=0;contador<numeros.length;contador++){
    if (numeros[contador]>maior){
      maior = numeros[contador];
      repeticao = 1;
    } else if(numeros[contador]===maior){
      repeticao +=1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1= Math.abs(mouse-cat1);
  let distanciaGato2= Math.abs(mouse-cat2);
  let retorno1= [];
if(distanciaGato1<distanciaGato2){
retorno1= "cat1";
} else if (distanciaGato2<distanciaGato1){
retorno1= "cat2";
}else{
retorno1= "os gatos trombam e o rato foge";
}
return retorno1;
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
function techList(tech, name) {
  const elemenTech = tech.map((element) => {
    let object = {
      tecnologia: element,
      nome: name,
     }
    return object;
    });
    return elemenTech;
}

console.log(techList(['React','JS'], 'lalano'));

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
