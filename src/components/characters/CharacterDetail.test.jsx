/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('Detail Component', () => {
  it('renders Detail component', () => {
    const character = {
      'name': 'Zenzola',
      'gender': null,
      'status': null,
      'born': null,
      'occupation': null,
      'rank': null,
      'affiliations': null,
      'portrayedby': null,
      'image': 'https://vignette.wikia.nocookie.net/x-files/images/9/97/Zenzola.jpg/revision/latest/scale-to-width-down/240?cb=20150613121059',
      'description': 'Dr. Zenzola was a physician in Newark, New Jersey who treated Craig for his injuries following his attack in the sewers by a mysterious creature. She explained to Fox Mulder that she was uncertain what had attacked Craig, but that she\'d given the patient gum to chew to help with a bad taste in his mouth as well as a treatment of antibiotics for any bacteria he may have picked up while immersed in the sewer water fighting with the creature. She also showed Mulder the bizarre bite wound on the man\'s back.',
      'categories': [
        'Doctors'
      ]
    };
    const { asFragment } = render(<CharacterDetail characterObj={character} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
