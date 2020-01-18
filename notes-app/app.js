const chalk = require("chalk");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

const greenMsg = "Success!";

console.log(chalk.green(greenMsg));

console.log(chalk.bold.inverse.green("Success!"));













// const add = require("./utils");

// const sum = add(4, -2);

// console.log(sum);