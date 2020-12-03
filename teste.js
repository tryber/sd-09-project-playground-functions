function repsValidation(array) {
  let isValid = true;
  let reps;

  for (let i of array) {
    reps = 0;

    for (let j of array) {
      if (i === j) {
        reps += 1;
      }
    }

    if (reps >= 3 || i < 0 || i > 9) {
      isValid = false;
    }
  }

  return isValid;
}

function checkIsValid(array) {
  let isValid;

  isValid = repsValidation(array);

  if (array.length !== 11) {
    isValid = false;
  }

  return isValid;
}

function generatePhoneNumber(array) {
  let result;
  let isValid = true;

  isValid = checkIsValid(array);

  if (isValid === true) {
    result = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  } else if (array.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    result = 'não é possível gerar um número de telefone com esses valores';
  }
  return result;
}
console.log(generatePhoneNumber([1,2,3,4,5,6,9,9,9,0,1]))