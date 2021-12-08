import { render, screen } from '@testing-library/react';
import Async from './Async'


describe('Async component', () => {

  test('renders posts', async () => {
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }]
    })
    // Arrange
    render(<Async />)
    // Assert
    const listElement = await screen.findAllByRole('listitem');
    expect(listElement).not.toHaveLength(0);
  });
});