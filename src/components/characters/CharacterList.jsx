/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character.name}>
      <a href={`/${character.name}`}>
        <CharacterItem {...character} />
      </a>
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
