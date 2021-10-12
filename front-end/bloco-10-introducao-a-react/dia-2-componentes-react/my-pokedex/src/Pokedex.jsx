import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokedex'>
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;
