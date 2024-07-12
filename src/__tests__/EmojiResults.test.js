// EmojiResults.test.js
import React from 'react';
import { render } from '@testing-library/react';
import EmojiResults from '../EmojiResults';
import emojiList from '../emojiList.json';

test('renders emoji list on initial load', () => {
  const { getAllByText } = render(<EmojiResults emojiData={emojiList} />);
  const emojiItems = getAllByText(/Click to copy emoji/i);
  expect(emojiItems.length).toBe(emojiList.length);
});
