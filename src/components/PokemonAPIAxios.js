import axios from 'axios';
import React, {useEffect, useState} from 'react';
import '../App.css';

const PokemonAPI = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset807')
      .then(result => setPokemon(result.data.results))
      .catch(err => console.log(err))
  },[]);
    console.log(pokemon.length);
    const pokemonSentenceStarter = () => {
      if (pokemon.length === 1118) {
        return "All";
      } else {
        return "First";
      }
    }

    
  return(
    
    <div>
    <h1>Pokemon API with Axios</h1>
    <p>{pokemonSentenceStarter()} {pokemon.length} pokemon</p>
    <ul>
      {pokemon.length > 0 && pokemon.map((poke, index)=>{
        return (
          <>
            <li key={index}
                style={{width:"fit-content", margin: "0 auto"}}
                >{poke.name}</li>
          </>
        );
      })}
      </ul>
    </div>
  );
}

export default PokemonAPI;

/**
 * Pokemon API component
 * 1. imports React, useEffect, and useState from react
 * 2. imports app.css
 * 
 * 4. create PokemonAPI component
 *  5. create useState vars to hold the list of pokemon
 * 
 *  7.call useEffect which takes an anonymous function as an argument
 *    8.use fetch to go to the pokeapi url and limits the pokemon to the first 807
 *    9. if fetch successful, take the response that comes in as json and use .json to convert to javascript obj
 *    10. then take the converted response and set pokemon to the results
 *    11. because the empty array is passed in as second param, only runs on page load
 *    13. returns
 *      14. a div, inside of which we run an expression to map out the pokemon
 *      15. if pokmon.length is greater than 0 it will map the pokemon, for every poke in the list
 *      16. it returns
 *      17. inside of a jsx tag
 *      18.a div with a key equal to index with the pokemons name inside
 * 
 * 26. exports PokemonAPI
 */