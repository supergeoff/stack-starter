import axios from 'axios';

module.exports = async function (): Promise<void> {
  // Configure axios for tests to use.
  const host: string = process.env.HOST ?? 'localhost';
  const port: string = process.env.PORT ?? '3000';
  axios.defaults.baseURL = `http://${host}:${port}`;
};
