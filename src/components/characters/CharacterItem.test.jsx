/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import CharacterItem from './CharacterItem';

describe('Item Component', () => {
  it('renders Item component', () => {
    const { asFragment } = render(<CharacterItem name="test" image="https://www.placecage.com/c/140/200" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
