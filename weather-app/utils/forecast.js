const request = require('request')

const forecast = (coordinates, callback) => {
    const url = 'https://api.darksky.net/forecast/96c7cbd898b93f8353ed032aac2ac45a/'+ coordinates.longitude +',' + coordinates.latitude +'?exclude=minutely,hourly,daily,flags'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const data = response.body.currently
    
            const temperature = data.temperature
            const precipitation = data.precipProbability
        
            callback(undefined, `It is currently ${temperature} with a ${precipitation}% chance of rain.`)
        }
    })
}

module.exports = forecast