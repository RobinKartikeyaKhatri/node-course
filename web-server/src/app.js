const path = require("path");
const express = require("express");
const hbs = require("hbs");

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
        name: "Robin Kartikeya Khatri"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Robin Kartikeya Khatri"
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        helpText: "This is some helpful text.",
        title: "Help",
        name: "Robin Kartikeya Khatri"
    });
});

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You must provide an address"
        });
    }

    res.send({
        forecast: "It is hot out there",
        location: "Barmer, Barmer. Rajasthan",
        address: req.query.address
    });
});

// 
// Goal: Update weather endpoint to accept address
// 
// 1. No address? Send back an error message
// 2. Address? Send back the static JSON
//      - Add address property onto JSON which returns the provided address
// 3. Test /weather and /weather?address=philadelphia

app.get("/products", (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term"
        })
    }
    console.log(req);
    res.send({
        products: []
    });
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Robin Kartikeya Khatri",
        errorMessage: "Help articles not found"
    })
});

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Robin Kartikeya Khatri",
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