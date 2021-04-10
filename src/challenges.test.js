const {calcArea,
          catAndMouse,
          compareTrue,
          concatName,
          decode,
          encode,
          fizzBuzz,
          footballPoints,
          generatePhoneNumber,
          techList,
          highestCount,
          hydrate,
          splitSentence,
          triangleCheck,} = require('./challenges');

describe('testes encode e decode', () => {
    it('testa se encode e decode sao funcoes', () => {
      expect(typeof encode).toEqual('function');
    }); 
      it('testa se encode e decode sao funcoes', () => {
      expect(typeof decode).toEqual('function');
    });
    it('testa se encode troca a letra a', () => {
      expect(encode('ana')).toBe('1n1');
    }); 
    it('testa se encode troca a letra b', () => {
      expect(encode('bernardo')).toBe('b2rn1rd4');
    }); 
});