import { Toaster } from '@components/toast/toaster';
import { router } from '@lib/router';
import i18n from '@services/i18n/i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
function App() {
  i18n.changeLanguage(localStorage.getItem('quickbill_lang') || 'en');
  const queryClient = new QueryClient();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
