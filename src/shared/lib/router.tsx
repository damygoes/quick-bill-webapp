import RootLayout from '@components/layout/RootLayout';
import AuthWrapper from '@features/auth/auth-wrapper/AuthWrapper';
import LoginPage from '@pages/auth/LoginPage';
import OtpPage from '@pages/auth/OtpPage';
import DashboardPage from '@pages/DashboardPage';
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
      <Route path="/verify-otp" element={<OtpPage />} />,
      <Route path="onboarding" element={<div> Onboarding </div>} />
      {/* //* Protected Routes */}
      <Route element={<AuthWrapper />}>
        <Route element={<RootLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />,
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
