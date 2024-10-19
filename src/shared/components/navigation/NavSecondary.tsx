import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@components/Sidebar';
import { cn } from '@lib/utils';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string;
    url: string;
    // icon: LucideIcon
    icon: React.FC<React.ComponentPropsWithoutRef<'svg'>> | React.ReactNode;
  }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const location = useLocation();
  const activeItem = items.find((item) =>
    location.pathname.startsWith(item.url)
  );
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem
              key={item.title}
              className={cn({
                'bg-sidebar-primary text-sidebar-primary-foreground rounded-md':
                  activeItem === item,
              })}
            >
              <SidebarMenuButton
                asChild
                size="sm"
                className={cn({
                  'hover:bg-sidebar-primary hover:text-sidebar-primary-foreground':
                    activeItem === item,
                })}
              >
                <Link to={item.url}>
                  {typeof item.icon === 'function' ? <item.icon /> : item.icon}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
