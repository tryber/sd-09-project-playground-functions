// **8 - FizzBuzz**
// -
// Crie uma função chamada `fizzBuzz` que receba uma array de números e retorne uma array da seguinte forma:

// - Para cada número da Array que seja divisível apenas por 3, apresente uma string `"fizz"`;
// - Para cada número da Array que seja divisível apenas por 5, apresente uma string `"buzz"`;
// - Caso o número seja divisível por 3 e 5, retorne a string `"fizzBuzz"`;
// - Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`;

// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar `["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]`.

// Desafio 8
let arrayNumber = [ 2 , 15 , 7 , 9 , 45]
function fizzBuzz() {
    for (let index =0; index < arrayNumber.length; index += 1){
    if (arrayNumber[index] % 3 === 0){
        console.log('fizz');
    }else if(arrayNumber[index] % 5 === 0){
        console.log('buzz');
    }else if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0){
        console.log('fizzBuzz');
    }else {
        console.log('bug!');
    }
    }
}






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


// Desafio 9
function encode() {
    // seu código aqui
  }
  function decode() {
    // seu código aqui
  }




// **10 - Lista de tecnologias**
// -
// Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado `name` com um nome.

// Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

// ```
// {
//   tech: "NomeTech",
//   name: name
// }
// ```

// Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo `tech` no objeto.

// A saída da sua função deve ser uma lista de objetos ordenada pelo campo `tech` dos objetos com o formato acima.

// Exemplo:
// ```
// Entradas da função:

// ["React", "Jest", "HTML", "CSS", "JavaScript"]
// "Lucas"

// // Saída:

// [
//   {
//     tech: "CSS",
//     name: "Lucas"
//   },
//   {
//     tech: "HTML",
//     name: "Lucas"
//   },
//   {
//     tech: "JavaScript",
//     name: "Lucas"
//   },
//   {
//     tech: "Jest",
//     name: "Lucas"
//   },
//   {
//     tech: "React",
//     name: "Lucas"
//   }
// ]
// ```

// Caso o array venha vazio sua função deve retornar 'Vazio!'






// Desafio 10
function techList(name, programList) {}