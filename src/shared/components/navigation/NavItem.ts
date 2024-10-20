import { ReactNode } from 'react';

export interface NavItem {
  name: string;
  url: string;
  icon: React.FC<React.ComponentPropsWithoutRef<'svg'>> | ReactNode;
}
