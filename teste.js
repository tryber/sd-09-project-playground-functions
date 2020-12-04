// **9 - Codifique e Decodifique**
// -
// Crie duas funções: a primeira deverá se chamar `encode` e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

// a -> 1 \
// e -> 2 \
// i -> 3 \
// o -> 4 \
// u -> 5

// Ou seja, caso o parâmetro de `encode` seja `"hi there!"`, o retorno deverá ser `"h3 th2r2!"`.

// A segunda função deverá se chamar `decode` e faz o contrário de `encode` - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de `decode` seja `"h3 th2r2!"`, o retorno deverá ser `"hi there!"`).


// // Desafio 9
// fonte de consulta : https://www.alura.com.br/artigos/trocando-caracteres-de-uma-string-no-java#:~:text=Para%20isso%20podemos%20usar%20o,que%20passarmos%20por%20outro%20caractere.

function encode(arrayEncode) {
    let encodeVocals = {
      a: '1',
      e: '2',
      i: '3',
      o: '4',
      u: '5',
   }
   arrayEncode = arrayEncode.replace(/a|e|i|o|u/gi, function(encoding){
     return encodeVocals[encoding];
   })
  return arrayEncode;
  }
//   console.log(encode('hi there!'));

  function decode(arrayDecode) {
    let encodeVocals = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
   }
   arrayDecode = arrayDecode.replace(/1|2|3|4|5/gi, function(decoding){
     return encodeVocals[decoding];
   })
  return arrayDecode;
  }
//   console.log(decode('h3 th2r2!'));