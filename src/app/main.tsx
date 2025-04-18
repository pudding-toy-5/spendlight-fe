import 'pretendard/dist/web/static/pretendard.css';
import './index.css';

// import Clarity from '@microsoft/clarity';
// tanstack-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// tanstack-router
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDom from 'react-dom/client';

import Toaster from '@/shared/ui/Toaster';

import { routeTree } from './routes.custom';

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
function insertClarity(key: string) {
  const clarityScript = document.createElement('script');
  clarityScript.async = true;
  clarityScript.src = `https://www.clarity.ms/tag/${key}`;
  document.head.appendChild(clarityScript);

  // window.clarity 초기화
  (window as any).clarity =
    (window as any).clarity ||
    function (...args: any[]) {
      ((window as any).clarity.q = (window as any).clarity.q || []).push(args);
    };
}

if (import.meta.env.PROD) {
  const CLARITY_KEY = import.meta.env.VITE_CLARITY_KEY as string;

  // Clarity.init(CLARITY_KEY);
  insertClarity(CLARITY_KEY);
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDom.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
      </QueryClientProvider>
    </StrictMode>
  );
}
