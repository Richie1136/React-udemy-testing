import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {

  test('Learning how to automate tests in react', () => {
    // Arrange
    render(<Greeting />);
    // Assert
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Learning how to automate tests in react', () => {
    // Arrange
    render(<Greeting />);
    // Assert
    const welcomeElement = screen.getByText(/Welcome to my app/i);
    expect(welcomeElement).toBeInTheDocument();
  });
})

