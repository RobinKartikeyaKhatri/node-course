const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();

const user = JSON.parse(dataJSON);
console.log(user);
user.name = "Robin Khatri";
user.age = 34;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);