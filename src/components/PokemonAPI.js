import React, {useEffect, useState} from 'react';
import '../App.css';

const PokemonAPI = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset807')
      .then(response => response.json())
      .then(response => setPokemon(response.results))
  },[]);
    console.log(pokemon);
  return(
    <div>
      {pokemon.length > 0 && pokemon.map((poke, index)=>{
        return (
          <>
            <div key={index}>{poke.name}</div>
          </>
        );
      })}
    </div>
  );
}

export default PokemonAPI;