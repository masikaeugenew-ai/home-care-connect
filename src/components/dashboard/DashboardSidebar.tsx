import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, TrendingUp, Headphones, DollarSign, Megaphone, Settings2, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Executive", path: "/dashboard", icon: LayoutDashboard },
  { label: "Sales", path: "/dashboard/sales", icon: TrendingUp },
  { label: "Support", path: "/dashboard/support", icon: Headphones },
  { label: "Financial", path: "/dashboard/financial", icon: DollarSign },
  { label: "Marketing", path: "/dashboard/marketing", icon: Megaphone },
  { label: "Operations", path: "/dashboard/operations", icon: Settings2 },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="glass-sidebar fixed left-0 top-0 z-40 flex h-screen w-60 flex-col text-white">
      <div className="flex items-center gap-2.5 px-6 py-5 border-b border-white/10">
        <Home className="h-7 w-7 text-white/90" />
        <div>
          <span className="text-lg font-bold tracking-tight font-display">HomeCare</span>
          <p className="text-[10px] text-white/50 uppercase tracking-widest">Dashboard</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-white/60 hover:bg-white/8 hover:text-white/90"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="px-4 py-4 border-t border-white/10">
        <div className="glass-card rounded-xl px-3 py-2 text-center" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-[10px] text-white/40 uppercase">Environment</p>
          <p className="text-xs text-white/80 font-medium">Kenya — Nairobi</p>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
