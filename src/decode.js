function fizzBuzz(numberArray) {
    let resultado = [];
    for (let i = 0; i < numberArray.length; i += 1) {
      if ((numberArray[i] % 3 === 0) && (numberArray[i] % 5 === 0)) {
        resultado.push('fizzBuzz');
      } else if ((numberArray[i] % 3 === 0)) {
        resultado.push('fizz');
      } else if ((numberArray[i] % 5 === 0)) {
        resultado.push('buzz');
      } else {
        resultado.push('bug!');
      }
    }
    return resultado
  }

console.log(fizzBuzz([2, 15, 7, 9, 45]));