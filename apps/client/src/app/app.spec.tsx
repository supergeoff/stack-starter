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
    render(<App />);
    await waitFor(() =>
      expect(screen.getByTestId('checkbutton')).toHaveTextContent('CHECK'),
    );
    expect(screen.getByTestId('checkbutton')).toHaveClass('bg-green-500');
  });

  it('should fetch data from the server and display a red button when the message is not "check" or the call is error', async () => {
    server.use(fetchKO);
    render(<App />);
    await waitFor(() =>
      expect(screen.getByTestId('checkbutton')).toHaveTextContent('KO'),
    );
    expect(screen.getByTestId('checkbutton')).toHaveClass('bg-red-500');
  });
});
