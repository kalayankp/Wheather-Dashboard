// src/components/WeatherCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ weather }) => {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {weather.name}
        </Typography>
        <Typography variant="body1">
          {weather.weather[0].description}
        </Typography>
        <Typography variant="body2">
          Temperature: {weather.main.temp}°C
        </Typography>
        <Typography variant="body2">
          Humidity: {weather.main.humidity}%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
