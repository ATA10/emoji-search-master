// Header.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

test('renders header with correct text', () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/Emoji Search/i);
  expect(headerElement).toBeInTheDocument();
});
