import React, {useEffect} from 'react';
import './App.css';
// import Example from './components/Example';
import PokemonAPI from './components/PokemonAPI';

function App() {
  return (
    <div className="App">
      <h1>check one two</h1>
      <h2>is this thing on?</h2>
      {/* <Example /> */}
      <PokemonAPI />
    </div>
  );
}

export default App;
