import React from 'react';
import { render, screen } from '@testing-library/react';
import Garment from './Garment';


test('renders header component', () => {
  render(<Garment />);
  const headerElement = screen.getByText('Camiseta 3 Rayas adidas Essentials Azul');
  expect(headerElement).toBeInTheDocument();
});
