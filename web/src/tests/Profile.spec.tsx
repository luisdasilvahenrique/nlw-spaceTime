import { render, screen } from '@testing-library/react';
import { Profile } from '../components/Profile';

jest.mock('@/lib/auth', () => ({
  getUser: jest.fn(() => ({
    avatarUrl: 'https://example.com/avatar.jpg',
    name: 'John Doe',
  })),
}));

describe('Profile Component', () => {
  test('renders Profile component', () => {
    render(<Profile />);
    
    // Verifica se a imagem do avatar está presente
    const avatarImage = screen.getByRole('img');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(avatarImage).toHaveAttribute('alt', '');

    // Verifica se o nome está presente
    const nameElement = screen.getByText('John Doe');
    expect(nameElement).toBeInTheDocument();

    // Verifica se o link de logout está presente
    const logoutLink = screen.getByTestId('text-exit');
    expect(logoutLink).toBeInTheDocument();
    expect(logoutLink).toHaveAttribute('href', '/api/auth/logout');
  });
});