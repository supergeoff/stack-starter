import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { server } from '../mocks/node';
import App from './app';
import { fetchKO } from '../mocks/handlers';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should fetch data from the server and display a green button when the message is "check"', async () => {
    await waitFor(() => screen.getByRole('button'));
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('check');
    expect(button).toHaveClass('bg-green-500');
  });

  it('should fetch data from the server and display a red button when the message is not "check"', async () => {
    server.use(fetchKO);
    render(<App />);
    await waitFor(() => screen.getByRole('button'));
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('error');
    expect(button).toHaveClass('bg-red-500');
  });

  it('should handle fetch errors gracefully', async () => {
    server.use(fetchKO);
    render(<App />);
    await waitFor(() => screen.getByText('Error fetching data'));
    expect(screen.getByText('Error fetching data')).toBeInTheDocument();
  });
});
