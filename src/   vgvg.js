function encode(letters) {
    for (let i in letters) {
      switch (letters[i]) {
        case 'a':
          letters[i] = '1';
          break;
        case 'e':
          letters[i] = '2';
          break;
        case 'i':
          letters[i] = '3';
          break;
        case 'o':
          letters[i] = '4';
          break;
        case 'u':
          letters[i] = '5';
          break;
        default:
          console.log('Repita o processo');
      }
    }
    return letters
  }