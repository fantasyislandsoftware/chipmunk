import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      onError: (err) => {
        return err;
      },
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
