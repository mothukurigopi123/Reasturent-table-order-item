function updateCurrentDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').innerText = currentDate.toLocaleDateString(undefined, options);
}

// Call the function to update the date on page load
updateCurrentDate();

// Function to fetch weather data from an API
async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '19c780c5db083447fc158cb75ed1614d'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        // Update the current weather display
        document.querySelector('.city').innerText = data.name;
        document.querySelector('.temp').innerText = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.humidity').innerText = `${data.main.humidity}%`;
        document.querySelector('.wind').innerText = `${data.wind.speed} km/h`;
        
        // Get the weather icon
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById('weather-icon').src = iconUrl;

        // Fetch hourly forecast
        getHourlyForecast(city);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Function to fetch hourly forecast
async function getHourlyForecast(city) {
    const apiKey = '19c780c5db083447fc158cb75ed1614d'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod !== "200") {
            alert(data.message);
            return;
        }

        // Prepare hourly forecast data
        const hourlyForecast = data.list.slice(0, 5).map(item => {
            return {
                time: item.dt_txt.split(" ")[1].slice(0, 5), // Extract time from dt_txt
                temp: Math.round(item.main.temp),
                icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`
            };
        });

        // Update the hourly forecast display
        const hourlyForecastContainer = document.getElementById('hourly-forecast');
        hourlyForecastContainer.innerHTML = ''; // Clear previous data

        hourlyForecast.forEach(hour => {
            const hourDiv = document.createElement('div');
            hourDiv.className = 'hourly';
            hourDiv.innerHTML = `
                <img src="${hour.icon}" alt="Weather Icon" style="width: 30px; height: 30px;">
                <div>${hour.time}</div>
                <div>${hour.temp}°C</div>
            `;
            hourlyForecastContainer.appendChild(hourDiv);
        });

        // Show the weather details section
        document.querySelector('.weather').style.display = 'block';

    } catch (error) {
        console.error("Error fetching hourly forecast:", error);
    }
}