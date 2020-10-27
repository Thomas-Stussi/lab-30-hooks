/* eslint-disable max-len */
export const fetchCharacters = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.results);
};

export const fetchCharacter = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters${name}`)
    .then(res => res.json())
    .then(json => json[0]);
};
