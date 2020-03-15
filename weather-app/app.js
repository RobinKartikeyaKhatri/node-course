const request = require("request");

const url = 'https://api.darksky.net/forecast/80518481f86abfa9dcb41a384f367dfd/25.746090,71.397453'

request({ url: url, json: true }, (error, response) => {
    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
});


// 
// Goal: Print a small forecast to the user
// 
// 1. Print: "It is currently 58.55 degrees out. There is a 0% chance of rain."
// 2. Test your work
