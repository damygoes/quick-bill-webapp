import { ThemeProvider } from '@components/ThemeProvider';
import { Toaster } from '@components/toast/toaster';
import { router } from '@lib/router';
import i18n from '@services/i18n/i18n';
import { SearchProvider } from '@shared/context/SearchContext';
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
        <ThemeProvider defaultTheme="light" storageKey="quickbill-ui-theme">
          <SearchProvider>
            <Toaster />
            <RouterProvider router={router} />
          </SearchProvider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
