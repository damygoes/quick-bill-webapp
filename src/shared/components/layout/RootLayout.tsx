import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '../Sidebar';
import AppSidebar from './AppSidebar';

const RootLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default RootLayout;
