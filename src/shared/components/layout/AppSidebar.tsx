import MainNav from '@components/navigation/MainNav';
import { NavSwitches } from '@components/navigation/NavSwitches';
import { NavUser } from '@components/navigation/NavUser';
import SecondaryNav from '@components/navigation/SecondaryNav';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@components/Sidebar';
import { useUserStore } from '@features/user/userStore';
import { MainNavData, SecondaryNavData } from '@shared/constants/navData';
import navSwitchItems from '@shared/constants/navSwitchItems';
import { Command } from 'lucide-react';
import * as React from 'react';

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const { user } = useUserStore.getState();
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <span>
                <div className="flex items-center justify-center rounded-lg aspect-square size-8 bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-sm leading-tight text-left">
                  <span className="font-semibold truncate">Quick Bill</span>
                  <span className="text-xs truncate">GmbH</span>
                </div>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <MainNav items={MainNavData()} />
        <SecondaryNav items={SecondaryNavData()} className="mt-auto" />
        <NavSwitches actions={navSwitchItems()} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user ?? null} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
