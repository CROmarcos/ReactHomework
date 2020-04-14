import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
