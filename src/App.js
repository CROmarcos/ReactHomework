import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import { Route } from 'react-router-dom';

function App() {
  return (
      <>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/events" component={Events}/>
      <Route path="/speakers" component={Speakers}/>
    </>
  );
}

export default App;
