const path = require("path");
const express = require("express");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Andrew Mead"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Andrew Mead"
    });
});

// 
// Goal: Create a template for helpl page
// 
// 1. Setup a help template to render a help message to the screen
// 2. Setup the help route and render the template with an example message
// 3. Visit the route in the browser and see your help message print

app.get("/help", (req, res) => {
    res.render("help", {
        helpText: "This is some helpful text."
    });
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