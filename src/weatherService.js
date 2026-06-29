require('dotenv').config();

const axios = require('axios');

async function getWeather(city) {
    const apiKey = process.env.WEATHER_API_KEY;
    console,log('API Key:', apiKey); // Log the API key to verify it's being read correctly
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await axios.get(url);
        console.log('Weather data fetched successfully:', response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    
    }
}

getWeather('New York');