const path = require("path");
const express = require("express");
const hbs = require("hbs");

// 
// Goal: Create a partial for footer
// 
// 1. Setup the template for the footer partial "Created by Some Name"
// 2. Render the partial at the bottom of all three pages
// 3. Test your work by visiting all three pages

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

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

app.get("/help", (req, res) => {
    res.render("help", {
        helpText: "This is some helpful text.",
        title: "Help",
        name: "Andrew Mead"
    });
});

app.get("/weather", (req, res) => {
    res.send({
        forecast: "It is hot out there",
        location: "Barmer, Barmer. Rajasthan"
    });
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Andrew Mead",
        errorMessage: "Help articles not found"
    })
});

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Andrew Mead",
        errorMessage: "Page not found"
    });
});

// 
// Goal: Create and render a 404 page with handlebars
// 
// 1. Setup the template to render the header and footer
// 2. Setup the template to render an error message in paragraph
// 3. Render the template for both 404 routes
//      - Page not found
//      - Help articles not found
// 4. Test your work. Visit /what and /help/units

app.listen(3000, () => {
    console.log("Server started...");
});