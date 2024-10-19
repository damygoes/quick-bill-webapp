import {
  ClientsIcon,
  CompaniesIcon,
  DashboardIcon,
  FeedbackIcon,
  InvoiceIcon,
  LanguagesIcon,
  SupportIcon,
  ThemeIcon,
} from '@components/Icons';
import LanguageSwitch from '@components/LanguageSwitch';
import { NavMain } from '@components/navigation/NavMain';
import { NavSecondary } from '@components/navigation/NavSecondary';
import { NavSwitches } from '@components/navigation/NavSwitches';
import { NavUser } from '@components/navigation/NavUser';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@components/Sidebar';
import ThemeToggle from '@components/ThemeToggle';
import { useUserStore } from '@features/user/userStore';
import { Command } from 'lucide-react';
import * as React from 'react';

const data = {
  // navMain: [
  //   {
  //     title: "Playground",
  //     url: "#",
  //     icon: SquareTerminal,
  //     isActive: true,
  //     items: [
  //       {
  //         title: "History",
  //         url: "#",
  //       },
  //       {
  //         title: "Starred",
  //         url: "#",
  //       },
  //       {
  //         title: "Settings",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Models",
  //     url: "#",
  //     icon: Bot,
  //     items: [
  //       {
  //         title: "Genesis",
  //         url: "#",
  //       },
  //       {
  //         title: "Explorer",
  //         url: "#",
  //       },
  //       {
  //         title: "Quantum",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Documentation",
  //     url: "#",
  //     icon: BookOpen,
  //     items: [
  //       {
  //         title: "Introduction",
  //         url: "#",
  //       },
  //       {
  //         title: "Get Started",
  //         url: "#",
  //       },
  //       {
  //         title: "Tutorials",
  //         url: "#",
  //       },
  //       {
  //         title: "Changelog",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Settings",
  //     url: "#",
  //     icon: Settings2,
  //     items: [
  //       {
  //         title: "General",
  //         url: "#",
  //       },
  //       {
  //         title: "Team",
  //         url: "#",
  //       },
  //       {
  //         title: "Billing",
  //         url: "#",
  //       },
  //       {
  //         title: "Limits",
  //         url: "#",
  //       },
  //     ],
  //   },
  // ],
  navMain: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: DashboardIcon,
    },
    {
      name: 'Invoicing',
      url: '/invoices',
      icon: InvoiceIcon,
    },
    {
      name: 'Companies',
      url: '/companies',
      icon: CompaniesIcon,
    },
    {
      name: 'Customers',
      url: '/customers',
      icon: ClientsIcon,
    },
  ],
  navSecondary: [
    {
      title: 'Support',
      url: '/support',
      icon: SupportIcon,
    },
    {
      title: 'Feedback',
      url: '/feedback',
      icon: FeedbackIcon,
    },
  ],
  navActions: [
    {
      title: <ThemeToggle />,
      icon: ThemeIcon,
    },
    {
      title: <LanguageSwitch />,
      icon: LanguagesIcon,
    },
  ],
};

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
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
        <NavSwitches actions={data.navActions} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user ?? null} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
