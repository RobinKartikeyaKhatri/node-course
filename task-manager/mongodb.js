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

    db.collection("users").deleteMany({
        age: 27
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });


    // 
    // Goal: Use deleteOne to remove a task
    // 
    // 1. Grab the description for the task you want to remove
    // 2. Setup the call with the query
    // 3. Use promise methods to setup the success/error handlers
    // 4. Test your work

    db.collection("tasks").deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
});