const https = require("https");

const url = 'https://api.darksky.net/forecast/80518481f86abfa9dcb41a384f367dfd/40,-75';

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk.toString();
    });
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on("error", (error) => {
    console.log("An error", error);
});

request.end()