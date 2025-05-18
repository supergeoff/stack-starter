import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@ts-starter/ui/styles/globals.css';

import App from './app/app';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
