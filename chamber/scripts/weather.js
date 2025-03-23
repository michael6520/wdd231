const lat = 40.76
const lon = -111.89
const key = "8a585377628344de40a23559c21ddc0f";

const weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;

fetch(weather)
    .then(response => response.json())
    .then(data => {
        const section = document.getElementById('weather');

        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description.replace(/\b\w/g, char => char.toUpperCase());;
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

        section.innerHTML = `
            <h3>Current Weather</h3>
            <p>${temp}°F</p>
            <p>${description}</p>
            <p>Sunrise: ${sunrise}</p>
            <p>Sunset: ${sunset}</p>
            `;
    })

fetch(forecast)
    .then(response => response.json())
    .then(data => {
        const section = document.getElementById('forecast');
        const forecastDays = data.list.filter((_, index) => index % 8 === 0).slice(0, 3);
        const today = new Date().toLocaleDateString();
        
        section.innerHTML = `<h3>Forecast</h3>`
        forecastDays.forEach(day => {
            const date = new Date(day.dt * 1000).toLocaleDateString();
            const dayName = (date === today) ? "Today" : new Date(day.dt * 1000).toLocaleDateString(undefined, { weekday: 'long' });
            const temp = Math.round(day.main.temp)
            section.innerHTML += `<p>${dayName}: ${temp}°F</p>`;
        })
    })