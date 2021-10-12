import React from "react";

class Pokemon extends React.Component {
  render() {

    const { pokemon } = this.props;

    return (
      <div className='pokemon-card'>
        <h1>{pokemon.name}</h1>
        <h2>{pokemon.type}</h2>
        <h3>Average weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</h3>
        <img src={pokemon.image} alt={`Foto do ${pokemon.name}.`} />
      </div>
    );
  }
}

export default Pokemon;
