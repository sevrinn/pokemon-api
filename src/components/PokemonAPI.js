import React, {useEffect, useState} from 'react';
import '../App.css';

const PokemonAPI = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(response => setPokemon(response.results))
  },[]);
    console.log(pokemon);
  return(
    <>
    <div>This is a message from the PokemonAPI component</div>
    </>
  );
}

export default PokemonAPI;