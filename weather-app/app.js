const request = require("request");

const url = "https://api.darksky.net/forecast/80518481f86abfa9dcb41a384f367dfd/37.8267,-122.4233"

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});