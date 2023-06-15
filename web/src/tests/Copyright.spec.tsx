import { render, screen } from '@testing-library/react';
import { Copyright } from '../components/Copyright';

describe('Copyright Component', () => {
  test('renders text and link correctly', () => {
    render(<Copyright />);
    
    // Verifica se o texto está presente
    const textElement = screen.getByText(/Feito com 💜 pela/i);
    expect(textElement).toBeInTheDocument();
    
    // Verifica se o link está presente e possui os atributos corretos
    const linkElement = screen.getByRole('link', { name: /Rocketseat/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('href', 'https://rocketseat.com.br/');
  });
});