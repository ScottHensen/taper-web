import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import PrimaryLayout from '../layouts/PrimaryLayout';
import './App.css';

const App = () => (
  <Router>
    <PrimaryLayout />
  </Router>
)
export default App;
