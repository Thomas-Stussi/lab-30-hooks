/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('List Component', () => {
  const characterArray = [{ name: 'test1', image: 'https://www.placecage.com/c/140/200' }, { name: 'test2', image: 'https://www.placecage.com/c/140/200' }];

  it('renders List component', () => {
    const { asFragment } = render(<CharacterList characters={characterArray} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
