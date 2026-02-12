import { ReactNode } from "react";
import DashboardSidebar from "./DashboardSidebar";
import TopBar from "./TopBar";

interface DashboardLayoutProps {
  title: string;
  children: ReactNode;
}

const DashboardLayout = ({ title, children }: DashboardLayoutProps) => (
  <div className="dashboard-bg min-h-screen">
    <DashboardSidebar />
    <div className="ml-60">
      <TopBar title={title} />
      <main className="p-6 space-y-6">{children}</main>
    </div>
  </div>
);

export default DashboardLayout;
