import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio app with hero section', () => {
  render(<App />);
  const heroHeading = screen.getByRole('heading', { name: /Gabriel Colón/i, level: 1 });
  expect(heroHeading).toBeInTheDocument();
});
