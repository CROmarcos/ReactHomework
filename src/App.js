import React, { useContext } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import { Route, Redirect } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/events" component={Events} />
      <PrivateRoute path="/speakers" component={Speakers} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Redirect to="/" />
    </>
  );
}

export default App;