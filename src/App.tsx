import { router } from '@lib/router';
import i18n from '@services/i18n/i18n';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
function App() {
  i18n.changeLanguage(localStorage.getItem('quickbill_lang') || 'en');
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
