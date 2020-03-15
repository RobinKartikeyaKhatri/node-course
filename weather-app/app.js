const request = require("request");

// const url = 'https://api.darksky.net/forecast/80518481f86abfa9dcb41a384f367dfd/25.746090,71.397453'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service!");
//     } else if (response.body.error) {
//         console.log("Unable to find the location");
//     } else {
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`);
//     }
    
// });



const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm9iaW5rYXJ0aWtleWEiLCJhIjoiY2s3c2Z2OG1oMGNxbjNycGdzbnAyYzZ6ZSJ9.mnuYyiqslJo0Fx4nh_EbEw&limit=1';

request({ url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to connect to location services!");
    } else if (response.body.features.length === 0) {
        // do something
        console.log("Unable to find location. Try another search!");
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitude, longitude);
    }
});
