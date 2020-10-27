/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { fetchCharacters } from '../../../services/fetchCharacters';

jest.mock('../../../services/fetchCharacters.js');

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    fetchCharacters.mockResolvedValue([
      { name: 'test1', image: 'https://www.placecage.com/c/140/200' }, { name: 'test2', image: 'https://www.placecage.com/c/140/200' }]);
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
