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
