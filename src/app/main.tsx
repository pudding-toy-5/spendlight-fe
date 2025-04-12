import 'pretendard/dist/web/static/pretendard.css';
import './index.css';

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

if (import.meta.env.PROD) {
  const script = document.createElement('script');
  const CLARITY_KEY = import.meta.env.CLARITY_KEY as string;
  script.src = `https://www.clarity.ms/tag/${CLARITY_KEY}`;
  script.async = true;
  document.head.appendChild(script);
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
