import React from 'react';
import './FarmerView.css';

function FarmerView({ weatherData }) {
  const getPrecipitation = () => {
    if (weatherData.rain) {
      return `${weatherData.rain['1h']} mm/h`;
    } else {
      return 'No rain';
    }
  };

  const getSeasonalAdvice = () => {
    if (weatherData.main.temp > 30) {
      return (
        <span>
          High temperatures, ensure crops are well-watered and consider shade cloth for sensitive crops.
        </span>
      );
    } else {
      return (
        <span>
          Monitor for pests and diseases, especially during warm and humid conditions.
        </span>
      );
    }
  };

  return (
    <div className="farmer-view">
      <h2>Farmer View</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Feels like: {weatherData.main.feels_like}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Precipitation: {getPrecipitation()}</p>
      <p>Wind: {weatherData.wind.speed} m/s</p>
      <p>Wind direction: {weatherData.wind.deg}°</p>
      <p>
        Conditions: {weatherData.weather[0].description}
        {weatherData.weather[0].main === 'Rain' && (
          <span>- Ideal conditions for most crops. Ensure proper drainage to avoid waterlogging.</span>
        )}
        {weatherData.weather[0].main === 'Clear' && (
          <span>- Remember to irrigate your crops today. Monitor soil moisture levels regularly.</span>
        )}
        {weatherData.weather[0].main === 'Clouds' && (
          <span>- Partial shade conditions. Check for any signs of fungal diseases.</span>
        )}
      </p>
      <p>Seasonal Advice: {getSeasonalAdvice()}</p>
    </div>
  );
}

export default FarmerView;
