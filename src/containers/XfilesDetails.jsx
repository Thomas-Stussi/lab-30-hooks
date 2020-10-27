/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import CharacterDetail from '../components/characters/CharacterDetail';
import { fetchCharacter } from '../../services/fetchCharacters';

const XfilesDetails = () => {

  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentLocation = window.location.pathname;
    fetchCharacter(currentLocation)
      .then(character => setCharacter(character))
      .finally(() => setLoading(false));
  }, []);


  if (loading) return <img src="https://i.giphy.com/media/uvDn0BLHElgRO/giphy.webp" />;

  return (
    <CharacterDetail characterObj={character} />
  );
};

export default XfilesDetails;
