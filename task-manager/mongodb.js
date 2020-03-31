// CRUD Operation -- Create Read Update Delete 

const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;

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

    db.collection("users").insertOne({
        name: "Robin",
        age: 34
    });
});