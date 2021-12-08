import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event'

describe('Greeting component', () => {

  test('Learning how to automate tests in react', () => {
    // Arrange
    render(<Greeting />);
    // Assert
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Learning how to tests using jest in react', () => {
    // Arrange
    render(<Greeting />);
    // Assert
    const welcomeElement = screen.getByText(/Welcome to my app/i);
    expect(welcomeElement).toBeInTheDocument();
  });
  test('renders welcome to my app if the button was not clicked', () => {
    // Arrange
    render(<Greeting />);
    // Assert
    const visibleElement = screen.getByText(/Welcome to my app/i);
    expect(visibleElement).toBeInTheDocument();
  });
  test('renders changed if the button was clicked', () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)
    // Assert
    const outputElement = screen.getByText(/Changed/i);
    expect(outputElement).toBeInTheDocument();
  });
  test('does not render Welcome to my app if the button was clicked', () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)
    // Assert
    const outputElement = screen.queryByText('Welcome to my app', { exact: false });
    expect(outputElement).not.toBeInTheDocument();
  });
})

