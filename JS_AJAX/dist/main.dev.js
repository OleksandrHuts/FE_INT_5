"use strict";

var API_KEY = 'f6c457b5aa568db97ef316cf1ee04092';
var BASE_URL = 'https://api.openweathermap.org/data/2.5/';

function loadWeather() {
  var cityName = window.inputField.value;
  if (!cityName) return false;
  var url = "".concat(BASE_URL, "weather?units=metric&q=").concat(cityName, "&appid=").concat(API_KEY);
  axios.get(url).then(function (res) {
    if (res.status === 200) {
      generateWeatherCard(res.data.main);
    } else {
      console.log(response.status);
    }
  });
}

function generateWeatherCard(data) {
  var humidity = data.humidity,
      temp = data.temp,
      pressure = data.pressure,
      temp_max = data.temp_max,
      temp_min = data.temp_min;
  var template = "\n        <div class=\"card\" style=\"width: 18rem;\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">Temperature:</h5>\n                <p class=\"card-text\">".concat(Math.ceil(temp), " &deg;</p>\n\n                <h5 class=\"card-title\">Humidity:</h5>\n                <p class=\"card-text\">").concat(humidity, "</p>\n\n                <h5 class=\"card-title\">Pressure:</h5>\n                <p class=\"card-text\">").concat(pressure, "</p>\n\n                <h5 class=\"card-title\">Max Temperature:</h5>\n                <p class=\"card-text\">").concat(Math.ceil(temp_max), " &deg;</p>\n\n                <h5 class=\"card-title\">Min Temperature:</h5>\n                <p class=\"card-text\">").concat(Math.ceil(temp_min), " &deg;</p>\n            </div>\n        </div>\n    ");
  window.pageContent.innerHTML = template;
}