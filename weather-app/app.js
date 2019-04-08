const request = require('request')

const url = 'https://api.darksky.net/forecast/96c7cbd898b93f8353ed032aac2ac45a/37.8267,-122.4233'

request({ url:url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})