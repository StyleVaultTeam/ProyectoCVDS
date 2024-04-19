import { render,fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders header with correct text', () => {
  render(<App />);
  const headerText = screen.getByText(/organiza tu armario virtualmente/i);
  expect(headerText).toBeInTheDocument();
});
test('renders application logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText('Logo de la aplicación');
  expect(logoElement).toBeInTheDocument();
});
test('renders navigation link for "Inicio"', () => {
  render(<App />);
  const inicioLink = screen.getByText('Inicio');
  expect(inicioLink).toBeInTheDocument();
});
test('does not navigate when "Inicio" link is clicked', () => {
  // Renderizamos el componente
  render(<App />);

  // Encontramos el enlace de "Inicio"
  const inicioLink = screen.getByText('Inicio');

  // Simulamos un clic en el enlace de "Inicio"
  fireEvent.click(inicioLink);

  // Verificamos que la sección "Inicio" no esté presente después del clic
  const inicioSection = screen.queryByTestId('inicio-section');
  expect(inicioSection).toBeNull();
});