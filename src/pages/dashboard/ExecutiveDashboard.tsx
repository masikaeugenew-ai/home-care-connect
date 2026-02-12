import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import GlassCard from "@/components/dashboard/GlassCard";
import { executiveKPIs, revenueBookingsTrend, opportunities, productPerformance } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { AlertTriangle, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ExecutiveDashboard = () => (
  <DashboardLayout title="Executive Dashboard">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {executiveKPIs.map((kpi) => (
        <KPICard key={kpi.label} {...kpi} />
      ))}
    </div>

    <div className="grid gap-6 lg:grid-cols-3">
      <GlassCard className="lg:col-span-2">
        <h3 className="text-lg font-display text-foreground mb-4">Revenue & Bookings Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueBookingsTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 25% 88%)" />
            <XAxis dataKey="month" fontSize={12} stroke="hsl(215 20% 46%)" />
            <YAxis fontSize={12} stroke="hsl(215 20% 46%)" />
            <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)' }} />
            <Legend />
            <Bar dataKey="revenue" name="Revenue (K KES)" fill="hsl(213 88% 34%)" radius={[6,6,0,0]} />
            <Bar dataKey="bookings" name="Bookings" fill="hsl(216 80% 58%)" radius={[6,6,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>

      <GlassCard>
        <h3 className="text-lg font-display text-foreground mb-4 flex items-center gap-2">
          <Zap className="h-4 w-4 text-warning" /> Opportunities
        </h3>
        <div className="space-y-4">
          {opportunities.map((o, i) => (
            <div key={i} className="rounded-xl bg-white/40 p-3 border border-white/30">
              <div className="flex items-start justify-between">
                <p className="text-sm font-medium text-foreground">{o.title}</p>
                <Badge variant={o.impact === "High" ? "default" : "secondary"} className="text-[10px] gradient-primary border-0 text-white">
                  {o.impact}
                </Badge>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{o.action}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>

    <GlassCard>
      <h3 className="text-lg font-display text-foreground mb-4">Product Performance</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 text-left text-muted-foreground">
              <th className="pb-3 pr-4 font-medium">Product</th>
              <th className="pb-3 pr-4 font-medium">Revenue</th>
              <th className="pb-3 pr-4 font-medium">Bookings</th>
              <th className="pb-3 font-medium">Growth</th>
            </tr>
          </thead>
          <tbody>
            {productPerformance.map((p) => (
              <tr key={p.product} className="border-b border-border/30">
                <td className="py-3 pr-4 font-medium text-foreground">{p.product}</td>
                <td className="py-3 pr-4 text-muted-foreground">{p.revenue}</td>
                <td className="py-3 pr-4 text-muted-foreground">{p.bookings.toLocaleString()}</td>
                <td className="py-3 text-success font-medium">{p.growth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  </DashboardLayout>
);

export default ExecutiveDashboard;
