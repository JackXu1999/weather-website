const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2dd8627c1861253ad0b6b2cda4fe8b66&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, `The current local time is ${body.location.localtime}. ${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} 
             degrees out. It feels like ${body.current.feelslike} degrees out. The UV index is ${body.current.uv_index}. The humidity is ${body.current.humidity}%.`);
        }
    })
}

module.exports= forecast;