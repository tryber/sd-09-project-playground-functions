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

function encode(encodeArray) {
    for(let index = 0; index < encodeArray; index += 1){
        if (encodeArray[index] === a){
            encodeArray.replaceAll("a","1");
            return stringA;
        }else if (encodeArray[index] === e) {
                encodeArray.replaceAll("e","1");
                return stringE;
        }else if (encodeArray[index] === i) {
                encodeArray.replaceAll("i","1");
                return stringI;
        }else if (encodeArray[index] === o) {
                encodeArray.replaceAll("o","1");
                return stringO;
        }else if (encodeArray[index] === u) {
                encodeArray.replaceAll("u","1");
                return stringU;
        }
    }
    return encodeArray;
  }
  console.log(encode('abacaxi'));

  function decode() {
    // seu código aqui
  }

//   public static String formataDados(String dado){
//     stringA = dado.replaceAll("a","4");
//     return stringA;
//  }
