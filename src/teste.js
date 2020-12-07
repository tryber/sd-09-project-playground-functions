function highestCount(NumbersArray) {

  let result = 0;
  
  for (let index = 0; index <= NumbersArray.length; index += 1) {
    if (NumbersArray[index] === high) {
      high = NumbersArray[index];
    } 
  }
  for (let j = 0; j <= highestCount.length; j += 1) {
    if(highestCount[j] == high) {
      result += 1;
    }
  } return result
}

let array = [2,3,1,3,4,5,4,5];
highestCount(array);