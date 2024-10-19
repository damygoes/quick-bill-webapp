import { Button } from '@components/Button';
import { useUserStore } from '@features/user/userStore';
import { AuthService } from '@services/axios/authService';

const DashboardView = () => {
  const { user } = useUserStore.getState();

  console.log('user in dashboard', user);

  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      DashboardView
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default DashboardView;
