import React, {useEffect, useState } from "react"
import axios from "axios"

 const PokeCard = (props) => { 
  const [pokemon, setPokemon]= useState({})
  
  
  
  useEffect(() => {
      pegaPokemon(props.pokemon);
  },[pokemon]); // componentDidUpdate (roda todo render se pokemon mudar)

  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado pokemon
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
    </div>
  );
}

export default PokeCard;