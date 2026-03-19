import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExecutiveDashboard from "./pages/dashboard/ExecutiveDashboard";
import SalesDashboard from "./pages/dashboard/SalesDashboard";
import SupportDashboard from "./pages/dashboard/SupportDashboard";
import FinancialDashboard from "./pages/dashboard/FinancialDashboard";
import MarketingDashboard from "./pages/dashboard/MarketingDashboard";
import OperationsDashboard from "./pages/dashboard/OperationsDashboard";
import NotFound from "./pages/NotFound";
import FindCaregiver from "./pages/FindCaregiver";
import Index from "./pages/Index";
import CaregiverPortal from "./pages/CaregiverPortal";
import AdminDashboard from "./pages/AdminDashboard";
import ProviderPortal from "./pages/ProviderPortal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/find-caregiver" element={<FindCaregiver />} />
          <Route path="/caregiver-portal" element={<CaregiverPortal />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/provider-portal" element={<ProviderPortal />} />
          <Route path="/dashboard" element={<ExecutiveDashboard />} />
          <Route path="/dashboard/sales" element={<SalesDashboard />} />
          <Route path="/dashboard/support" element={<SupportDashboard />} />
          <Route path="/dashboard/financial" element={<FinancialDashboard />} />
          <Route path="/dashboard/marketing" element={<MarketingDashboard />} />
          <Route path="/dashboard/operations" element={<OperationsDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
