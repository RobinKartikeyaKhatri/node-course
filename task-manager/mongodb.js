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

    // db.collection("users").insertOne({
    //     name: "Robin",
    //     age: 34
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops)
    // });

    // db.collection("users").insertMany([
    //     {name: "Jen", age: 28},
    //     {name: "Gunther", age: 27}
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert users!");
    //     }

    //     console.log(result.ops);
    // });





    // Goal: Insert 3 tasks into a new tasks collection
    // 
    // 1. Use insertMany to insert the documents
    //    - description (string), completed (boolean)
    // 2. Setup the callback to handle error or print ops
    // 3. Run the script
    // 4. Refresh the database in Robo 3t and view data in tasks collection

    db.collection("tasks").insertMany([
        {description: "Clean the house", completed: true},
        {description: "Renew inspection", completed: false},
        {description: "Pot plants", completed: false}
    ], (error, result) => {
        if (error) {
            return console.log("Unable to insert tasks");
        }

        console.log(result.ops);
    });
});