// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
// While it's useful to get the current temperature for a specific lat/lng,
// most often we want to provide the name of a place instead.
// 
// You already created a function that can do address ==> position,
// and one that can do position ==> temperature. For this exercise,
// re-use these two functions to create one that goes directly from address ==> temperature.
// 
// You can copy/paste your code from the previous exercises,
// or require them at the top of this file.
// Remember to _export_ them from their file, if you plan on _requiring_ them.
require('dotenv').config()
const opencage = require('opencage-api-client');
const request = require('request-promise');


// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getCurrentTemperature(address) {
    const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address
    };
    return opencage.geocode(requestObj)
        .then(data => {
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    const place = data.results[0];
                    console.log(place);
                    return place.geometry;
                }
            } else {
                // other possible response codes:
                // https://opencagedata.com/api#codes
                console.log('error', data.status.message);
            }
        })
        .then(data => {
            request(`https://api.darksky.net/forecast/f2d4daca73103bdc1746a1e34e97fb12/${data.lat},${data.lng}`)
            .then(response => {
                let data = JSON.parse(response)
                // console.log(data.currently.temperature)
                return {temperature: data.currently.temperature}
            })
            .then(data => {
                console.log(data)
            })
        })
        .catch(error => console.log('error', error));
}
getCurrentTemperature('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');
