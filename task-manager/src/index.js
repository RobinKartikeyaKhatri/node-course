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

app.use((req, res, next) => {
    res.status(503).send("Site is currently down. Check back soon!");
});

// 
// Goal: Setup middleware for maintainance mode
// 
// 1. Register a new middleware funcion
// 2. Send back a maintenance message with a 503 status code
// 3. Try your requests from the server and confirm status/message shows


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log("server is up on port " + port);
});

const jwt = require("jsonwebtoken");

const myFunction = async () => {
    const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", { expiresIn: "7 days" });
    console.log(token);

    const data = jwt.verify(token, "thisismynewcourse");
    console.log(data);
}

myFunction();