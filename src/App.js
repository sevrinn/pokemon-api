import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import PokemonAPI from './components/PokemonAPI';
import PokemonAPIAxios from './components/PokemonAPIAxios';
// import Example from './components/Example';
// import PokemonAPI from './components/PokemonAPI';
// import AxiosPokemonAPI from './components/AxiosPokemonAPI';



function App() {
  

  //useEffect must go outside of jsx
  //runs automatically on first render
  //if no second arg is provided, it will run everytime component updates
  //if empty array is added, it will run on on first render
  //if you add a variable into the second arg, it will run everytime that 
      //var is updated
  useEffect(() => {
    console.log("useEffect function invoked");
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then((result)=>console.log(result))
    .catch((err)=>console.log(err));
  }, []);
  console.log("COMPONENT RENDER");


  return (
    <div className="App">
    
    {/* <PokemonAPI /> */}
    <PokemonAPIAxios />
    </div>

  );
  
  
}

export default App;
