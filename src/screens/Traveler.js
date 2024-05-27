import React from 'react';
import './TravelerView.css';

function TravelerView({ weatherData, travelAdvisory }) {
  const getPackingSuggestion = (condition) => {
    switch (condition) {
      case 'Rain':
        return "Don't forget your umbrella and raincoat.";
      case 'Clear':
        return "Pack your sunglasses and sunscreen.";
      case 'Snow':
        return "Wear warm clothes and boots.";
      case 'Thunderstorm':
        return "Stay safe indoors if possible.";
      default:
        return "Check the weather conditions before you pack.";
    }
  };

  return (
    <div>
      <h2>Traveler View</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Conditions: {weatherData.weather[0].description}</p>
      <p>Packing Suggestions: {getPackingSuggestion(weatherData.weather[0].main)}</p>
      {weatherData.weather[0].main === 'Extreme' && (
        <p style={{ color: 'red' }}>Alert: Extreme weather conditions! Travel may be affected.</p>
      )}
      {travelAdvisory && (
        <div>
          <h3>Travel Advisory</h3>
          <p>{travelAdvisory}</p>
        </div>
      )}
    </div>
  );
}

export default TravelerView;
