import { render, screen } from '@testing-library/react';
import { Hero } from '../components/Hero';
import nlwLogo from '../assets/nlw-spaceTime-logo.svg';


describe('Hero Component', () => {
  test('renders Hero component', () => {
    render(<Hero />);
    
    // Verifica se o logotipo está presente
    const logoImage = screen.getByTestId('logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src' ,nlwLogo);
    expect(logoImage).toHaveAttribute('alt', 'NLW spaceTime');

    // Verifica se o título está presente
    const titleElement = screen.getByRole('heading', { level: 1, name: /Sua cápsula do tempo/i });
    expect(titleElement).toBeInTheDocument();

    // Verifica se o texto está presente
    const textElement = screen.getByText(/Colecione momentos marcantes da sua jornada e compartilhe/i);
    expect(textElement).toBeInTheDocument();

    // Verifica se o link está presente
    const linkElement = screen.getByRole('link', { name: /CADASTRAR LEMBRANÇA/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/memories/new');
  });
});