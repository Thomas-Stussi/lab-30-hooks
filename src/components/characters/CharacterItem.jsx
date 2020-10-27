import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, image }) => (
  <>
    <img src={image} />
    <h3>{name}</h3>
  </>
);

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CharacterItem;
