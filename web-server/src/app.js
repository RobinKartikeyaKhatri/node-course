const express = require("express");

const app = express();

app.get("", (req, res) => {
    res.send("<h1>Weather</h1>");
});

app.get("/help", (req, res) => {
    res.send([{
        name: "Andrew Mead",
        age: 27
    },{
        name: "Robin",
        age: 34
    },{
        name: "Lalit",
        age: 37
    }]);
});

// 
// Goal: Update routes
// 
// 1. Setup about route to render a little with HTML
// 2. Setup a weather route to send back JSON
//      - Object with forecast and location strings
// 3. Test your work by visiting both in the browser



app.get("/about", (req, res) => {
    res.send("<h2>This is from About Route</h2>");
});

app.get("/weather", (req, res) => {
    res.send({
        forecast: "It is hot out there",
        location: "Barmer, Barmer. Rajasthan"
    });
});

app.listen(3000, () => {
    console.log("Server started...");
});