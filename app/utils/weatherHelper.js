const axios = require('axios');
const apiKey = '29a21140061433520b834c76ca6c430f';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

function callWeather (location) {
  var call = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&APPID=' + apiKey + '&cnt=5&units=imperial';
  return axios.get(call);
}

function convertDate(unix) {
  var date = new Date(unix * 1000);
  var day = days[date.getDay()];
  var month = months[date.getMonth()];
  return day + ', ' + month + ' ' + date.getDate();
}

function parseForecast (forecast) {
  var parsed = forecast.map(function(day) {
    return {
      date: convertDate(day.dt),
      icon: day.weather[0].icon,
      desc: day.weather[0].description,
      max: day.temp.max,
      min: day.temp.min,
      humidity: day.humidity
    }
  });
  return parsed;
}

var weatherHelper = {
  getForecast(location) {
    return callWeather(location)
      .then(function (response) {
        var reply = parseForecast(response.data.list);
        reply.forEach((day) => {
          day.city = response.data.city.name;
        });
        reply.unshift(response.data.city.name);
        return reply;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

module.exports = weatherHelper;