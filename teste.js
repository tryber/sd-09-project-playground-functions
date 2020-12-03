function checkIsValid(array) {
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
  
    if (array.length !== 11) {
      isValid = false;
    }
  
    return isValid;
  }