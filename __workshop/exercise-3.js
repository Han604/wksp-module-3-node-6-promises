// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

// Given a position (latitude and longitude), returns the position
const request = require('request-promise')
require('dotenv').config()
const darkSkyApi = require('dark-sky')


function getCurrentTemperatureAtPosition(key, lat, lng) {
    // console.log(key)
    // console.log(lat)
    // console.log(lng)
    return request(`https://api.darksky.net/forecast/${key}/${lat},${lng}`)
            .then(response => {
            let data = JSON.parse(response)
            // console.log(data.currently.temperature)
            return data.currently.temperature
        })
    }
    getCurrentTemperatureAtPosition(process.env.DARKSKY_API_KEY, 35.6762, 139.6503)
        .then(data => {console.log(data)})