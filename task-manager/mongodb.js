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

    // db.collection("users").updateOne({
    //     _id: new ObjectID("5e83319b11d7f11140ed1919")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });


    // 
    // Goal: Use updateMany to complete all tasks
    // 
    // 1. Check the documentation for updateMany
    // 2. Setup the call with the query and the updates
    // 3. Use promises methods to setup the success/error handlers
    // 4. Test your work


    db.collection("tasks").updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
});