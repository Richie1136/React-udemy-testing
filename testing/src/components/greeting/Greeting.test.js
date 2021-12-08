import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';


test('Learning how to automate tests in react', () => {
  // Arrange
  render(<Greeting />);
  // Assert
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});