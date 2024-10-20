import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@components/Sidebar';
import { cn } from '@lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from './NavItem';

interface MainNavProps {
  items: NavItem[];
}

const MainNav = ({ items }: MainNavProps) => {
  const location = useLocation();
  const activeItem = items.find((item) =>
    location.pathname.startsWith(item.url)
  );

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem
            key={item.name}
            className={cn({
              'bg-sidebar-primary text-sidebar-primary-foreground rounded-md':
                activeItem === item,
            })}
          >
            <SidebarMenuButton
              asChild
              className={cn({
                'hover:bg-sidebar-primary hover:text-sidebar-primary-foreground':
                  activeItem === item,
              })}
            >
              <Link to={item.url}>
                {typeof item.icon === 'function' ? <item.icon /> : item.icon}
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default MainNav;
