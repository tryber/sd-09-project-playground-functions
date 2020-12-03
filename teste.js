function generatePhoneNumber(array) {
    let isValid = true;
    let result;
    let reps;
  
    for (let i of array) {
      reps = 0;
  
      for (let j of array) {
        if (i === j) {
          reps += 1;
        }
      }
  
      if (reps >= 3 || i < 0 || i > 9) {
        result = 'não é possível gerar um número de telefone com esses valores';
        isValid = false;
      }
    }
  
    if (array.length !== 11) {
      result = 'Array com tamanho incorreto.';
      isValid = false;
    }
  
    if (isValid === true) {
      result = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
    }
    return result;
  }

  console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]))