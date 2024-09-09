import { render, screen } from '@testing-library/react';
import DashboardPage from '../app/dashboard/page'; 

test('renders weather search form', () => {
  render(<DashboardPage />);
  
  const inputElement = screen.getByPlaceholderText('Digite a cidade'); 
  expect(inputElement).toBeInTheDocument();
});
