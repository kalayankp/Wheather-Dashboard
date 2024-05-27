// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

import Home from '../screens/Home'
import EventPlanner from '../screens/EventPlanner'

import Farmer from '../screens/Farmer'
import Traveler from '../screens/Traveler'

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/event-planner">Event Planner</Button>
          <Button color="inherit" component={Link} to="/farmer">Farmer</Button>
          <Button color="inherit" component={Link} to="/traveler">Traveler</Button>
        </Toolbar>
      </AppBar>
      <Container>
      <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/event-planner" component={EventPlanner} />
          <Route path="/farmer" component={Farmer} />
          <Route path="/traveler" component={Traveler} />
          </Routes>
      </Container>
    </Router>
  );
}

export default App;
