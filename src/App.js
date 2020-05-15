import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import { Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
      <>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/events" component={Events}/>
      <Route path="/speakers" component={Speakers}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
    </>
  );
}

export default App;
