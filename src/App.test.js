import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title of the app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Expense Tracker/i);
  expect(titleElement).toBeInTheDocument();
});
