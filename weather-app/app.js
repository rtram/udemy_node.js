const request = require('request')

const geocode = require('./utils/geocode.js')

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


geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
