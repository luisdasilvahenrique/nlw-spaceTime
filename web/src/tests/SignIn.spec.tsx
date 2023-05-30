import { render, screen } from '@testing-library/react';
import { SignIn } from '../components/SignIn';

describe('SignIn Component', () => {
  test('renders SignIn component', () => {
    render(<SignIn />);
    
    // Verifica se o link está presente
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();

    // Verifica se o ícone de usuário está presente
    const userIcon = screen.getByTestId('user-icon');
    expect(userIcon).toBeInTheDocument();

    // Verifica se o texto está presente
    const textElement = screen.getByText('Crie sua conta e salve suas memórias!');
    expect(textElement).toBeInTheDocument();
  });

  test('renders correct GitHub OAuth URL', () => {
    render(<SignIn />);
    
    // Verifica se o link contém a URL correta
    const linkElement = screen.getByRole('link');
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const expectedUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}`;
    expect(linkElement).toHaveAttribute('href', expectedUrl);
  });
});