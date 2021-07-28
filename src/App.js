import React, {useEffect} from 'react';
import './App.css';
// import Example from './components/Example';
import PokemonAPI from './components/PokemonAPI';

function App() {
  return (
    <div className="App">
      <h1>Pokemon API</h1>
      
      {/* <Example /> */}
      <PokemonAPI />
    </div>
  );
}

export default App;
