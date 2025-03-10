import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from '@/app/routes/Router';
import './index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
