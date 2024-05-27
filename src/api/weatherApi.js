// src/api/weatherApi.js
import axios from 'axios';

const API_KEY = '5c4734ca2c749e6f3e81b734cecf6471';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city) => {
  const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  return response.data;
};
