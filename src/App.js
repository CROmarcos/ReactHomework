import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import { Route } from 'react-router-dom';
import Progress from 'rsup-progress';

function App() {
  const progress=new Progress();
  
  setTimeout(()=>{
      return progress.end();
  }, 1000);

  return (
      <>
      {progress.start()}
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/events" component={Events}/>
      <Route path="/speakers" component={Speakers}/>
    </>
  );
}

export default App;
