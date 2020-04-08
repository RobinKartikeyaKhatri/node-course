require("../src/db/mongoose");
const User = require("../src/models/user");



User.findByIdAndUpdate("5e8b0b8ddb95a2226846fb81", {age: 1}).then((user) => {
    console.log(user);
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});