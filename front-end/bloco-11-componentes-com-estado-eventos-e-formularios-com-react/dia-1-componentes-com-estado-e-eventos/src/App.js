import './App.css';
import Pokedex from './Pokedex';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='title'>Sua Pokedex</h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;
