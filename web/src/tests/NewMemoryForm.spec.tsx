import { render, screen, fireEvent } from '@testing-library/react';
import { api } from '@/lib/api';
import { NewMemoryForm } from '../components/NewMemoryForm';

jest.mock('@/lib/api');

describe('NewMemoryForm Component', () => {
  const mockedRouter = {
    push: jest.fn(),
  };

  const mockedPost = api.post as jest.MockedFunction<typeof api.post>;

  beforeEach(() => {
    mockedRouter.push.mockReset();
    mockedPost.mockReset();
  });

  test('submits form and redirects to home', async () => {
    render(<NewMemoryForm />);

    const coverUrl = 'mocked-cover-url';
    const content = 'Mocked content';
    const isPublic = true;

    const fileInput = screen.getByLabelText(/anexar mídia/i) as HTMLInputElement;
    const contentInput = screen.getByPlaceholderText(
      /fique livre para adicionar fotos, vídeos e relatos/i
    ) as HTMLTextAreaElement;
    const isPublicInput = screen.getByLabelText(/tornar memória pública/i) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /salvar/i });

    const mockFormData = new FormData();
    mockFormData.set('coverUrl', coverUrl);
    mockFormData.set('content', content);
    mockFormData.set('isPublic', String(isPublic));

    fireEvent.change(fileInput, { target: { files: [new File([], 'mocked-image.jpg')] } });
    fireEvent.change(contentInput, { target: { value: content } });
    fireEvent.click(isPublicInput);
    fireEvent.click(submitButton);

    expect(mockedPost).toHaveBeenCalledWith('/upload', expect.any(FormData));
    expect(mockedPost).toHaveBeenCalledWith(
      '/memories',
      {
        coverUrl,
        content,
        isPublic,
      },
      expect.any(Object)
    );

    await mockedPost.mock.results[0].value;
    await mockedPost.mock.results[1].value;

    expect(mockedRouter.push).toHaveBeenCalledWith('/');
  });
});