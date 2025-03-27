const API_KEY = "973e088688766ef57d8fa93846f704cc";
const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const loadingText = document.getElementById("loading");
const weatherResult = document.getElementById("weather-result");

loadingText.style.display = "none";

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();
    if (!city) {
        alert("Введите название города!");
        return;
    }

    weatherResult.innerHTML = "";

    loadingText.style.display = "block";
    searchBtn.disabled = true;

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
        );

        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: Город не найден`);
        }

        const data = await response.json();
        
        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Температура: ${data.main.temp}°C</p>
            <p>Погода: ${data.weather[0].description}</p>
            <p>Влажность: ${data.main.humidity}%</p>
            <p>Ветер: ${data.wind.speed} м/с</p>
        `;
    } 
    catch (error) {
        weatherResult.innerHTML = `<p class="error">${error.message}</p>`;
    } finally {
        
        loadingText.style.display = "none";
        searchBtn.disabled = false;
    }
});
