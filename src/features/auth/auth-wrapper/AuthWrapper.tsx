import { useUserStore } from '@features/user/userStore';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthWrapper = () => {
  const { user } = useUserStore.getState();
  const location = useLocation();

  if (!user) return <Navigate to="/" state={{ from: location }} replace />;

  if (user && !user.isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }

  return <Outlet />;
};

export default AuthWrapper;
