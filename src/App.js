import React from 'react';
import Header from './components/Header';
import Home from './components/home'
import './App.css';

function App() {
  return (
    // BEM
    <div className="App">
      <Header />
      <Home/>
    </div>
  );
}

export default App;
