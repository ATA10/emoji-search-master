// EmojiResultRow.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EmojiResultRow from '../EmojiResultRow';

test('copies emoji to clipboard on click', () => {
  document.execCommand = jest.fn();
  const { getByText } = render(<EmojiResultRow title="Grinning" symbol="😀" />);

  const emojiItem = getByText(/Click to copy emoji/i);
  fireEvent.click(emojiItem);

  expect(document.execCommand).toHaveBeenCalledWith('copy');
});
