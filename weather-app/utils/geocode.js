const request = require('request')

const geocode = (address, callback) => {
    const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?limit=1&access_token=pk.eyJ1IjoicnRyYW0iLCJhIjoiY2pxeHdwMDYwMDMzaDN4cHB6bW95ZHNqeSJ9.UEwgGPHUbB4g8DA-pm74sA'

    request( {url: mapBoxURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length < 1) {
            callback('No Location found, Try another search!', undefined)
        } else {    
            const data = response.body.features[0]
    
            const location = data.place_name
            const long = data.center[0]
            const lat = data.center[1]
    
            const coord = {
                'longitude': long,
                'latitude': lat,
                'location': location
            }

            callback(undefined, coord)
        }
    })
}

module.exports = geocode