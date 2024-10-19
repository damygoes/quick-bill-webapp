import { Button } from '@components/Button';
import { LogoutIcon } from '@components/Icons';
import { AuthService } from '@services/axios/authService';
import { useTranslation } from 'react-i18next';

const LogoutButton = () => {
  const { t } = useTranslation();
  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <Button
      iconBefore={<LogoutIcon />}
      onClick={handleLogout}
      variant="destructive"
      className="w-full"
    >
      {t('auth.logout', 'Logout')}
    </Button>
  );
};

export default LogoutButton;
