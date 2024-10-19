import Typography from '@components/Typography';
import { useUserStore } from '@features/user/userStore';

const DashboardView = () => {
  const { user } = useUserStore.getState();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Typography variant="h5">Welcome, {user?.firstName}!</Typography>
    </div>
  );
};

export default DashboardView;
