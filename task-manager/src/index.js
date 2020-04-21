const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = 3000 || process.env.PORT;

// app.use((req, res, next) => {
//     if (req.method === "GET") {
//         res.send("GET requests are disabled");
//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send("Site is currently down. Check back soon!");
// });


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log("server is up on port " + port);
});


const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
    // const task = await Task.findById("5e9ee03bf653441c24cabad5");
    // await task.populate("owner").execPopulate()
    // console.log(task.owner);

    const user = await User.findById("5e9eded2fae1e01a1ce3fec4");
    await user.populate("tasks").execPopulate()
    console.log(user.tasks);
}

main();