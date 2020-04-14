// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
// Again here you should re-use two previously created functions, plus the `getDistance` function provided to you in `workshop.js`.
//
// One of the functions does address ==> position and the other simply does nothing ==> position.
// The `getDistance` function needs the two positions to compute the final value.

// Euclidian distance between two points
require('dotenv').config()
const opencage = require('opencage-api-client');
const request = require('request-promise');

function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}
function getAddressPosition(address) {
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
        .catch(error => console.log('error', error));
    }

    function getIssPosition(){
        return request('http://api.open-notify.org/iss-now.json')
            .then(response => {
                const issPosition = JSON.parse(response)
                return {
                    lat : issPosition.iss_position.latitude,
                    lng : issPosition.iss_position.longitude
                }
            })
            .then(data => {
                issPosition = data;
                return issPosition;
            })
    }
// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistanceFromIss(address) {
    return getAddressPosition(address)
        .then(pos1 => {
            return getIssPosition()
                .then(pos2 => {
                    return getDistance(pos1, pos2)
                })
        })
}

let distance = null

getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
    .then(data => {
        distance = data
        console.log(distance)
    })
