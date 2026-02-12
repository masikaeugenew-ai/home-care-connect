import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import GlassCard from "@/components/dashboard/GlassCard";
import { salesKPIs, salesFunnel, productRevenue, revenueDrivers } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, FunnelChart, Funnel, Cell, LabelList } from "recharts";

const FUNNEL_COLORS = ["hsl(213 88% 34%)", "hsl(213 80% 42%)", "hsl(216 80% 50%)", "hsl(216 80% 58%)", "hsl(216 70% 66%)"];

const SalesDashboard = () => (
  <DashboardLayout title="Sales Dashboard">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {salesKPIs.map((kpi) => (
        <KPICard key={kpi.label} {...kpi} />
      ))}
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <GlassCard>
        <h3 className="text-lg font-display text-foreground mb-4">Sales Funnel</h3>
        <div className="space-y-3">
          {salesFunnel.map((s, i) => {
            const pct = (s.value / salesFunnel[0].value) * 100;
            return (
              <div key={s.stage} className="flex items-center gap-3">
                <span className="w-20 text-xs text-muted-foreground font-medium">{s.stage}</span>
                <div className="flex-1 h-7 rounded-lg bg-white/30 overflow-hidden">
                  <div
                    className="h-full rounded-lg flex items-center px-2 text-xs text-white font-medium"
                    style={{ width: `${pct}%`, background: FUNNEL_COLORS[i] }}
                  >
                    {s.value.toLocaleString()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="text-lg font-display text-foreground mb-4">Revenue by Product</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={productRevenue} layout="vertical">
            <XAxis type="number" fontSize={12} stroke="hsl(215 20% 46%)" />
            <YAxis dataKey="name" type="category" fontSize={11} stroke="hsl(215 20% 46%)" width={90} />
            <Tooltip contentStyle={{ borderRadius: '12px', background: 'rgba(255,255,255,0.9)' }} />
            <Bar dataKey="revenue" name="Revenue (K KES)" fill="hsl(213 88% 34%)" radius={[0,6,6,0]} />
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>
    </div>

    <div className="grid gap-6 lg:grid-cols-3">
      {(["channels", "regions", "services"] as const).map((key) => (
        <GlassCard key={key}>
          <h3 className="text-base font-display text-foreground mb-3 capitalize">Top {key}</h3>
          <div className="space-y-2">
            {revenueDrivers[key].map((d) => (
              <div key={d.name} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{d.name}</span>
                <span className="font-medium text-foreground">{d.value}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      ))}
    </div>
  </DashboardLayout>
);

export default SalesDashboard;
