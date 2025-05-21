const {add} = require('../caculator.js');

test('add function',()=>{
   expect(add(1,2)).toBe(3);
});