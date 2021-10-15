import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import Button from './Button';
import './pokedex.css';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      actualPokemonIndex: 0,
      filter: 'all',
    };
  }

  filter(type) {
    this.setState({ filter: type, actualPokemonIndex: 0 });
  }

  next(number) {
    this.setState(state => ({
      actualPokemonIndex: (state.actualPokemonIndex + 1) % number,
    }));
  }

  fetchFilteredPokemons() {
    const { filter } = this.state;

    return pokemons.filter(pokemon => {
      if (filter === 'all') return true;
      return pokemon.type === filter;
    });
  }

  fetchPokemonTypes() {
    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const pokemon = filteredPokemons[this.state.actualPokemonIndex];

    return (
      <div className='pokedex'>
        <Pokemon key={pokemon.id} pokemon={pokemon} />

        <div className='pokedex-buttons-container'>

          <Button
            onClick={() => this.filter('all')}
            className='filter-btn'
          >
            All
          </Button>

          {pokemonTypes.map(type => (
            <Button
              key={type}
              onClick={() => this.filter(type)}
              className='filter-btn'
            >
              {type}
            </Button>
          ))}
        </div>
        <Button
          className='next-btn'
          onClick={() => this.next(filteredPokemons.length)}
          disabled={filteredPokemons.length < 2}
        >
          Próximo
        </Button>
      </div>
    );
  }
}

export default Pokedex;
