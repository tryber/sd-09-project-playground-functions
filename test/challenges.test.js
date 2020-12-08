const assert = require("assert")
const challenges = require('../src/challenges')

assert(challenges.compareTrue(true, true))
assert(!challenges.compareTrue(true, false))
console.log('1° OK');

assert.strictEqual(challenges.calcArea(10, 10), 50)
assert.strictEqual(challenges.calcArea(15, 30), 225)
console.log('2° OK');

assert.deepStrictEqual(challenges.splitSentence('go Trybe'), ['go', 'Trybe'])
assert.deepStrictEqual(challenges.splitSentence('testando split function'), ['testando', 'split', 'function'])
console.log('3° OK');

assert.deepStrictEqual(challenges.concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']), 'Paolillo, Lucas')
assert.deepStrictEqual(challenges.concatName(['teste', 'ze', 'api', 'passou']), 'passou, teste')
console.log('4° OK');

assert.deepStrictEqual(challenges.footballPoints(4, 7), 19)
assert.deepStrictEqual(challenges.footballPoints(9, 9), 36)
console.log('5° OK');

assert.deepStrictEqual(challenges.highestCount([9, 1, 2, 3, 9, 5, 7]), 2)
assert.deepStrictEqual(challenges.highestCount([9, 1, 2, 3, 9, 5, 7, 7, 3, 8, 7, 4, 12, 12, 8, 12]), 3)
console.log('6° OK');

assert.deepStrictEqual(challenges.catAndMouse(5, 9, 1), 'os gatos trombam e o rato foge')
assert.deepStrictEqual(challenges.catAndMouse(-5, -9, -1), 'os gatos trombam e o rato foge')
assert.deepStrictEqual(challenges.catAndMouse(-5, -4, 9), 'cat1')
assert.deepStrictEqual(challenges.catAndMouse(-5, 9, -1), 'cat2')
console.log('7° OK');

assert.deepStrictEqual(challenges.fizzBuzz([2, 15, 7, 9, 45]), ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"])
assert.deepStrictEqual(challenges.fizzBuzz([2, 14, 7, 9, 45]), ["bug!", "bug!", "bug!", "fizz", "fizzBuzz"])
console.log('8° OK');

assert.deepStrictEqual(challenges.encode("hi there!"), "h3 th2r2!")
assert.deepStrictEqual(challenges.decode("h3 th2r2!"), "hi there!")
console.log('9° OK');

assert.deepStrictEqual(challenges.techList([], 'Lucas'), 'Vazio!')
assert.deepStrictEqual(challenges.techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'), [
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
])
console.log('10° OK');

assert.deepStrictEqual(challenges.generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2]), "Array com tamanho incorreto.")
assert.deepStrictEqual(challenges.generatePhoneNumber([1, 2, 9, 0, 1, 2]), "Array com tamanho incorreto.")
assert.deepStrictEqual(challenges.generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 1]), "não é possível gerar um número de telefone com esses valores")
assert.deepStrictEqual(challenges.generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]), "não é possível gerar um número de telefone com esses valores")
assert.deepStrictEqual(challenges.generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 10, 9, 2, 1]), "não é possível gerar um número de telefone com esses valores")
assert.deepStrictEqual(challenges.generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]), '(12) 34567-8901')
console.log('11° OK');

assert.deepStrictEqual(challenges.triangleCheck(10, 14, 8), true)
assert.deepStrictEqual(challenges.triangleCheck(10, 18, 8), false)
console.log('12° OK');

assert.deepStrictEqual(challenges.hydrate('1 cerveja'), '1 copo de água' )
assert.deepStrictEqual(challenges.hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'), '7 copos de água')
assert.deepStrictEqual(challenges.hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'), '7 copos de água')
console.log('13° OK');

