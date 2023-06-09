import { render, screen } from '@testing-library/react';
import { EmptyMemories } from '../components/EmptyMemories';

describe('EmptyMemories Component', () => {
  test('renders EmptyMemories component', () => {
    render(<EmptyMemories />);
    
    // Verifica se o texto está presente
    const textElement = screen.getByText(/Você ainda não registrou nenhuma lembrança/i);
    expect(textElement).toBeInTheDocument();

    // Verifica se o link está presente
    const linkElement = screen.getByRole('link', { name: /criar agora/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '');

    // Outros testes que você deseja realizar

    // Exemplo de teste para verificar a classe CSS
    expect(linkElement).toHaveClass('underline');
    expect(linkElement).toHaveClass('hover:text-gray-50');
  });
});