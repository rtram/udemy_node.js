const request = require('request')

const url = 'https://api.darksky.net/forecast/96c7cbd898b93f8353ed032aac2ac45a/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    const data = response.body.currently

    const temperature = data.temperature
    const precipitation = data.precipProbability

    console.log(`It is currently ${temperature} with a ${precipitation}% chance of rain.`)
})