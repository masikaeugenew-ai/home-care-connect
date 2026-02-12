import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import GlassCard from "@/components/dashboard/GlassCard";
import { operationsKPIs, operationalLoad, bottlenecks, incidents } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

const OperationsDashboard = () => (
  <DashboardLayout title="Operations Dashboard">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {operationsKPIs.map((kpi) => (
        <KPICard key={kpi.label} {...kpi} />
      ))}
    </div>

    <GlassCard>
      <h3 className="text-lg font-display text-foreground mb-4">Operational Load</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={operationalLoad}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 25% 88%)" />
          <XAxis dataKey="day" fontSize={12} stroke="hsl(215 20% 46%)" />
          <YAxis fontSize={12} stroke="hsl(215 20% 46%)" />
          <Tooltip contentStyle={{ borderRadius: '12px', background: 'rgba(255,255,255,0.9)' }} />
          <Legend />
          <Bar dataKey="requests" name="Requests" fill="hsl(213 88% 34%)" radius={[4,4,0,0]} />
          <Bar dataKey="assignments" name="Assignments" fill="hsl(216 80% 58%)" radius={[4,4,0,0]} />
          <Bar dataKey="failures" name="Failures" fill="hsl(0 84% 60%)" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </GlassCard>

    <div className="grid gap-6 lg:grid-cols-2">
      <GlassCard>
        <h3 className="text-lg font-display text-foreground mb-4 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-warning" /> Bottlenecks
        </h3>
        <div className="space-y-3">
          {bottlenecks.map((b) => (
            <div key={b.area} className="rounded-xl bg-white/40 p-3 border border-white/30">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">{b.area}</p>
                <Badge variant={b.severity === "High" ? "destructive" : b.severity === "Medium" ? "default" : "secondary"} className="text-[10px]">
                  {b.severity}
                </Badge>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{b.detail}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="text-lg font-display text-foreground mb-4">Recent Incidents</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 text-left text-muted-foreground">
                <th className="pb-3 pr-4 font-medium">ID</th>
                <th className="pb-3 pr-4 font-medium">Title</th>
                <th className="pb-3 pr-4 font-medium">Status</th>
                <th className="pb-3 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map((inc) => (
                <tr key={inc.id} className="border-b border-border/30">
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">{inc.id}</td>
                  <td className="py-2.5 pr-4 text-foreground">{inc.title}</td>
                  <td className="py-2.5 pr-4">
                    <Badge variant={inc.status === "Resolved" ? "secondary" : "default"} className={inc.status !== "Resolved" ? "gradient-primary border-0 text-white" : ""}>
                      {inc.status}
                    </Badge>
                  </td>
                  <td className="py-2.5 text-muted-foreground">{inc.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  </DashboardLayout>
);

export default OperationsDashboard;
