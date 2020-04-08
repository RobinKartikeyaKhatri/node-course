// 
// Goal: Mess around with promise chaining
// 
// 1. Create promise-chaining-2.js
// 2. Load in mongoose and task model
// 3. Remove a given task by id
// 4. Get and print the total number of incomplete task
// 5. Test your work!

require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5e8b13e18a03d0241461444e").then((removed) => {
    console.log(removed);
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error);
});