// CRUD Operation -- Create Read Update Delete 

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);

// Connection URL 
const connectionURL = "mongodb://127.0.0.1:27017";

// Database name
const databaseName = "task-manager";

// Use connect method to connect to the server
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne({_id: new ObjectID("5e834b8b9463681d50e89ad8")}, (error, user) => {
    //     if (error) {
    //         return console.log("Unable to fetch!");
    //     }

    //     console.log(user);
    // });



    // db.collection("users").find({age: 34}).toArray((error, users) => {
    //     console.log(users);
    // });


    // db.collection("users").find({age: 34}).count((error, count) => {
    //     console.log(count);
    // });


    // 
    // Goal: Use find and findOne with tasks
    // 
    // 1. Use findOne to fetch the last task by its id (print doc to console)
    // 2. Use find to fetch all tasks that are not completed (print docs to console)
    // 3. test your work!


    db.collection("tasks").findOne({_id: new ObjectID("5e83428fb2c7a7168cef0be6")}, (error, task) => {
        if (error) {
            return console.log("Unable to fetch!");
        }

        console.log(task);
    });

    db.collection("tasks").find({completed: false}).toArray((error, tasks) => {
        console.log(tasks);
    });
});