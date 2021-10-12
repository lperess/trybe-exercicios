import React from "react";
import PropTypes from "prop-types";

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

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
