import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherDashboard.css';
import EventPlanner from '../screens/EventPlanner';
import Farmer from '../screens/Farmer';
import Traveler from '../screens/Traveler';

const API_KEY = '5c4734ca2c749e6f3e81b734cecf6471'; 

function WeatherDashboard() {
  const [cities, setCities] = useState(['London', 'New York', 'Tokyo']);
  const [weatherData, setWeatherData] = useState([]);
  const [userGroup, setUserGroup] = useState('general');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const dataPromises = cities.map(city =>
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        );
        const results = await Promise.all(dataPromises);
        setWeatherData(results.map(result => result.data));
        setError(null);
      } catch (error) {
        setError('Error fetching data. Please check the city names.');
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [cities]);

  const handleCityChange = (event, index) => {
    const newCities = [...cities];
    newCities[index] = event.target.value;
    setCities(newCities);
  };

  const addCity = () => {
    setCities([...cities, '']);
  };

  const handleUserGroupChange = (group) => {
    setUserGroup(group);
  };

  return (
    <div className="weather-dashboard">
      <div className="header">
        <h1>WeatherWise</h1>
      </div>

      <div className="user-group-selection">
        <button onClick={() => handleUserGroupChange('general')}>General</button>
        <button onClick={() => handleUserGroupChange('eventPlanner')}>Event Planner</button>
        <button onClick={() => handleUserGroupChange('farmer')}>Farmer</button>
        <button onClick={() => handleUserGroupChange('traveler')}>Traveler</button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="weather-info">
        {cities.map((city, index) => (
          <div key={index} className="city-weather">
            <input
              className="city-input"
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(event) => handleCityChange(event, index)}
            />
            {weatherData[index] && (
              <>
                <h2>{weatherData[index].name}, {weatherData[index].sys.country}</h2>
                {userGroup === 'general' && (
                  <div className="weather-details">
                    <p>Temperature: {weatherData[index].main.temp}°C</p>
                    <p>Feels like: {weatherData[index].main.feels_like}°C</p>
                    <p>Description: {weatherData[index].weather[0].description}</p>
                    <p>Humidity: {weatherData[index].main.humidity}%</p>
                    <p>Wind: {weatherData[index].wind.speed} m/s</p>
                  </div>
                )}
                {userGroup === 'eventPlanner' && (
                  <EventPlanner weatherData={weatherData[index]} />
                )}
                {userGroup === 'farmer' && (
                  <Farmer weatherData={weatherData[index]} />
                )}
                {userGroup === 'traveler' && (
                  <Traveler weatherData={weatherData[index]} />
                )}
              </>
            )}
          </div>
        ))}
        <button className="button" onClick={addCity}>Add City</button>
      </div>

      <div className="creative-feature">
        <h3>Weather Preparedness Tips</h3>
        <p>
          Stay ahead of the weather with our personalized tips based on current conditions.
        </p>
      </div>
    </div>
  );
}

export default WeatherDashboard;
