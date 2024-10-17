import LoginPage from '@pages/auth/LoginPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* //* Public Routes */}
      <Route path="/" element={<LoginPage />} />,
      <Route path="onboarding" element={<div> Onboarding </div>} />
      {/* //* Protected Routes */}
      <Route element={<div> Require Auth Element </div>}>
        <Route element={<div>Root Layout</div>}>
          <Route path="/dashboard" element={<div>Dashboard Screen</div>} />,
          <Route path="/companies" element={<div>Companies Screen</div>} />,
          <Route path="/customers" element={<div>Customers Screen</div>} />,
          <Route path="/invoices" element={<div>Invoices Screen</div>} />,
        </Route>
      </Route>
      {/* //* Catch All */}
      <Route path="*" element={<div> Not Found Screen </div>} />,
    </Route>
  )
);
