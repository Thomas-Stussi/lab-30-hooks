/* eslint-disable keyword-spacing */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../../services/fetchCharacters';

const Xfiles = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>
    <p>Loading</p>
    <img data-testid="loading" src="https://i.giphy.com/media/uvDn0BLHElgRO/giphy.webp" />
  </div>
  ;

  return (
    <CharacterList characters={characters} />
  );
};

export default Xfiles;
