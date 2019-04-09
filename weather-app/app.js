const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

geocode('Boston', (error, data) => {
    if (error) {
        console.log('Error', error)
    } else {
        forecast(data, (error, response) => {
            if (error) {
                console.log(data)
            } else {
                console.log(data.location)
                console.log(response)
            }
        })
    }
})
