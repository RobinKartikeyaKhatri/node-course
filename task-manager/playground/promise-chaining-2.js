require("../src/db/mongoose");
const Task = require("../src/models/task");

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count;
}

deleteTaskAndCount("5e8b12ce1c106d246c814fa3").then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});