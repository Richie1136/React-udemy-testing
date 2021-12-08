import { render, screen } from '@testing-library/react';
import Async from './Async'


describe('Async component', () => {

  test('renders posts', async () => {
    // Arrange
    render(<Async />)
    // Assert
    const listElement = await screen.findAllByRole('listitem');
    expect(listElement).not.toHaveLength(0);
  });
});