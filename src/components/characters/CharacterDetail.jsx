import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ characterObj }) => (
  <>
    <h3 data-testid="detail">{characterObj.name}</h3>
    <img src={characterObj.image} />
    <p>Bio: {characterObj.description}</p>
    <a href="/">
      <button>Back to Character List</button>
    </a>

  </>
);

CharacterDetail.propTypes = {
  characterObj: PropTypes.object.isRequired
};

export default CharacterDetail;
