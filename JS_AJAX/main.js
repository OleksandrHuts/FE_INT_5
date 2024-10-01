const API_KEY = 'f6c457b5aa568db97ef316cf1ee04092';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

function loadWeather() {
    const cityName = window.inputField.value;

    if (!cityName) return false;

    const url = `${BASE_URL}weather?units=metric&q=${cityName}&appid=${API_KEY}`
    axios.get(url).then(res => {
            if (res.status === 200) {
                generateWeatherCard(res.data.main)
            } else {
                console.log(response.status);
            }
        })
}


function generateWeatherCard(data) {
    const { humidity, temp, pressure, temp_max, temp_min } = data;

    const template = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Temperature:</h5>
                <p class="card-text">${Math.ceil(temp)} &deg;</p>

                <h5 class="card-title">Humidity:</h5>
                <p class="card-text">${humidity}</p>

                <h5 class="card-title">Pressure:</h5>
                <p class="card-text">${pressure}</p>

                <h5 class="card-title">Max Temperature:</h5>
                <p class="card-text">${Math.ceil(temp_max)} &deg;</p>

                <h5 class="card-title">Min Temperature:</h5>
                <p class="card-text">${Math.ceil(temp_min)} &deg;</p>
            </div>
        </div>
    `;

    window.pageContent.innerHTML = template;
}