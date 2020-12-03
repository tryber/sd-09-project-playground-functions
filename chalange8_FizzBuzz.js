// Desafio 8
array = [15, 8, 5, 3, 15, 16]
function fizzBuzz(array) {
        let index = 0
        for (index = 0; index < array.length; index ++) {
                if (array[index] % 3 == 0 && array[index] % 5 == 0) {
                        array[index] = "fizzBuzz";
                } else if (array[index] % 3 == 0) {
                        array[index] = "fizz";
                } else if (array[index] % 5 == 0) {
                        array[index] = "buzz";
                } else {
                        array[index] = "bug!";
                }
        }
        
        return array;
}
console.log(fizzBuzz(array));

