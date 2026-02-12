import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import GlassCard from "@/components/dashboard/GlassCard";
import { supportKPIs, ticketsTrend, recurringIssues, churnRiskFlags } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

const SupportDashboard = () => (
  <DashboardLayout title="Support Dashboard">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {supportKPIs.map((kpi) => (
        <KPICard key={kpi.label} {...kpi} />
      ))}
    </div>

    <GlassCard>
      <h3 className="text-lg font-display text-foreground mb-4">Tickets by Category</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={ticketsTrend}>
          <XAxis dataKey="week" fontSize={12} stroke="hsl(215 20% 46%)" />
          <YAxis fontSize={12} stroke="hsl(215 20% 46%)" />
          <Tooltip contentStyle={{ borderRadius: '12px', background: 'rgba(255,255,255,0.9)' }} />
          <Legend />
          <Bar dataKey="billing" name="Billing" fill="hsl(213 88% 34%)" radius={[4,4,0,0]} stackId="a" />
          <Bar dataKey="service" name="Service" fill="hsl(216 80% 58%)" radius={[4,4,0,0]} stackId="a" />
          <Bar dataKey="technical" name="Technical" fill="hsl(152 60% 42%)" radius={[4,4,0,0]} stackId="a" />
          <Bar dataKey="other" name="Other" fill="hsl(38 92% 50%)" radius={[4,4,0,0]} stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </GlassCard>

    <div className="grid gap-6 lg:grid-cols-2">
      <GlassCard>
        <h3 className="text-lg font-display text-foreground mb-4">Recurring Issues</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 text-left text-muted-foreground">
                <th className="pb-3 pr-4 font-medium">Issue</th>
                <th className="pb-3 pr-4 font-medium">Severity</th>
                <th className="pb-3 pr-4 font-medium">Count</th>
                <th className="pb-3 font-medium">Trend</th>
              </tr>
            </thead>
            <tbody>
              {recurringIssues.map((r) => (
                <tr key={r.issue} className="border-b border-border/30">
                  <td className="py-2.5 pr-4 text-foreground">{r.issue}</td>
                  <td className="py-2.5 pr-4">
                    <Badge variant={r.severity === "High" ? "destructive" : r.severity === "Medium" ? "default" : "secondary"} className="text-[10px]">
                      {r.severity}
                    </Badge>
                  </td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{r.count}</td>
                  <td className="py-2.5 text-muted-foreground">{r.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="text-lg font-display text-foreground mb-4 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-warning" /> Retention Signals
        </h3>
        <div className="space-y-3">
          {churnRiskFlags.map((f) => (
            <div key={f.flag} className="flex items-center justify-between rounded-xl bg-white/40 p-3 border border-white/30">
              <div>
                <p className="text-sm font-medium text-foreground">{f.flag}</p>
                <p className="text-xs text-muted-foreground">{f.users} users affected</p>
              </div>
              <Badge variant={f.risk === "High" ? "destructive" : "default"} className="text-[10px]">
                {f.risk}
              </Badge>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  </DashboardLayout>
);

export default SupportDashboard;
