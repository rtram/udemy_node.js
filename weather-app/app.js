const request = require('request')

const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&access_token=pk.eyJ1IjoicnRyYW0iLCJhIjoiY2pxeHdwMDYwMDMzaDN4cHB6bW95ZHNqeSJ9.UEwgGPHUbB4g8DA-pm74sA'

const url = 'https://api.darksky.net/forecast/96c7cbd898b93f8353ed032aac2ac45a/37.8267,-122.4233?exclude=minutely,hourly,daily,flags'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service.')
    } else if (response.body.error) {
        console.log('Unable to find location.')
    } else {
        const data = response.body.currently

        const temperature = data.temperature
        const precipitation = data.precipProbability
    
        console.log(`It is currently ${temperature} with a ${precipitation}% chance of rain.`)
    }
})

request( {url: mapBoxURL, json: true }, (error, response) => {

    if (error) {
        console.log('Unable to connect to location services')
    } else if (response.body.features.length < 1) {
        console.log('No Location found')
    } else {    
        const data = response.body.features[0]

        const long = data.center[0]
        const lat = data.center[1]

        console.log('long: ' + long)
        console.log('lat: ' + lat)
    }
})