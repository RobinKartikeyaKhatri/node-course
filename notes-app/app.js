const validator = require("validator");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

console.log(validator.isURL("https://mead.io"));















// const add = require("./utils");

// const sum = add(4, -2);

// console.log(sum);