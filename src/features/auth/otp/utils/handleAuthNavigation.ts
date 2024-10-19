import { User } from '@features/user/types/user';
import { NavigateFunction } from 'react-router-dom';

interface AuthNavigationProps {
  user: User;
  navigate: NavigateFunction;
}

export const handleAuthNavigation = ({
  user,
  navigate,
}: AuthNavigationProps) => {
  if (user) {
    if (!user.isOnboarded) {
      navigate('/onboarding');
    } else {
      navigate('/dashboard');
    }
  }
};
