import React from 'react';
import './EventPlannerView.css';

function EventPlannerView({ weatherData }) {
  const getVenueRecommendation = () => {
    if (weatherData.weather[0].main === 'Rain') {
      return 'Consider an indoor venue.';
    } else if (weatherData.weather[0].main === 'Clouds') {
      return 'An outdoor venue with some cover might be ideal.';
    } else if (weatherData.weather[0].main === 'Clear') {
      return 'Perfect weather for an outdoor event!';
    } else {
      return 'Check the weather conditions for venue recommendations.';
    }
  };

  return (
    <div className="event-planner-view">
      <h2>Event Planner View</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Conditions: {weatherData.weather[0].description}</p>
      <p>{getVenueRecommendation()}</p>
    </div>
  );
}

export default EventPlannerView;
