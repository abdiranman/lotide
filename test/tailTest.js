const tail = require('../tail')
const assertEqual = require('../assertEqual')


const words = ["Yo Yo", "Lighthouse", "Labs"];
const originalLength = words.length;
tail(words);
assertEqual(words.length, originalLength); 



module.exports = tail;