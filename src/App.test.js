import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

test('renders portfolio app with hero section', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  const heroHeading = screen.getByRole('heading', { name: /Gabriel Colón/i, level: 1 });
  expect(heroHeading).toBeInTheDocument();
});
