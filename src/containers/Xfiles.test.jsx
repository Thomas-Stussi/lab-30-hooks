/* eslint-disable space-before-function-paren */
/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Xfiles from './Xfiles';
import { fetchCharacters } from '../../services/fetchCharacters';

jest.mock('../../services/fetchCharacters.js');

describe('Xfiles container', () => {
  it('displays a loading message', () => {
    fetchCharacters.mockResolvedValue([
      { name: 'test1', image: 'https://www.placecage.com/c/140/200' }, { name: 'test2', image: 'https://www.placecage.com/c/140/200' }]);
    render(<Xfiles />);

    const loading = screen.getByTestId('loading');
    expect(loading).not.toBeEmptyDOMElement;
  });

  it('displays a list of characters', async () => {
    fetchCharacters.mockResolvedValue([
      { name: 'test1', image: 'https://www.placecage.com/c/140/200' },
      { name: 'test2', image: 'https://www.placecage.com/c/140/200' }
    ]);
    render(<Xfiles />);

    const characterList = await screen.findByTestId('characters');
    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });

  });
});
