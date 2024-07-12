import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test('filters emoji list based on search input', () => {
  const { getByPlaceholderText, getAllByText } = render(<App />);
  const searchInput = getByPlaceholderText(/Search emoji/i);

  fireEvent.change(searchInput, { target: { value: 'joy' } });

  const filteredEmojis = getAllByText(/Click to copy emoji/i);
  expect(filteredEmojis.length).toBe(1); // Assuming 'Joy' is the only emoji that matches 'joy'
});