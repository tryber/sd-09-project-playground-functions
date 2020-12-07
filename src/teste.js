
  function decode(letter) {
    let letters = letter.split('');
    console.log(letter);
    for(let i = 0; i <= letters.length; i += 1) {
      switch (letters[i]) {
        case '1': 
          letters[i] = 'a';
          break;
        case '2':
          letters[i] = 'e';
          break;
        case '3':
          letters[i] = 'i';
          break;
        case '4':
          letters[i] = 'o';
        case '5':
          letters[i] = 'u';
          break;
      }
    }
    return letters
  }

decode('h3 th2r2');