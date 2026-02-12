import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import GlassCard from "@/components/dashboard/GlassCard";
import { financialKPIs, revenueCostTrend, cashFlowTable, forecastData } from "@/data/mockData";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";

const combinedForecast = [
  ...revenueCostTrend.map((d) => ({ ...d, projected: null })),
  ...forecastData.map((d) => ({ ...d, revenue: null, costs: null })),
];

const FinancialDashboard = () => (
  <DashboardLayout title="Financial Dashboard">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {financialKPIs.map((kpi) => (
        <KPICard key={kpi.label} {...kpi} />
      ))}
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <GlassCard>
        <h3 className="text-lg font-display text-foreground mb-4">Revenue vs Costs</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={revenueCostTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 25% 88%)" />
            <XAxis dataKey="month" fontSize={12} stroke="hsl(215 20% 46%)" />
            <YAxis fontSize={12} stroke="hsl(215 20% 46%)" />
            <Tooltip contentStyle={{ borderRadius: '12px', background: 'rgba(255,255,255,0.9)' }} />
            <Legend />
            <Bar dataKey="revenue" name="Revenue (K KES)" fill="hsl(213 88% 34%)" radius={[6,6,0,0]} />
            <Bar dataKey="costs" name="Costs (K KES)" fill="hsl(0 84% 60%)" radius={[6,6,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>

      <GlassCard>
        <h3 className="text-lg font-display text-foreground mb-4">3-Month Forecast</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={combinedForecast}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 25% 88%)" />
            <XAxis dataKey="month" fontSize={12} stroke="hsl(215 20% 46%)" />
            <YAxis fontSize={12} stroke="hsl(215 20% 46%)" />
            <Tooltip contentStyle={{ borderRadius: '12px', background: 'rgba(255,255,255,0.9)' }} />
            <Legend />
            <Line type="monotone" dataKey="revenue" name="Actual" stroke="hsl(213 88% 34%)" strokeWidth={2} dot={{ r: 4 }} connectNulls={false} />
            <Line type="monotone" dataKey="projected" name="Projected" stroke="hsl(216 80% 58%)" strokeWidth={2} strokeDasharray="6 4" dot={{ r: 4 }} connectNulls={false} />
          </LineChart>
        </ResponsiveContainer>
      </GlassCard>
    </div>

    <GlassCard>
      <h3 className="text-lg font-display text-foreground mb-4">Cash Flow Summary</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 text-left text-muted-foreground">
              <th className="pb-3 pr-4 font-medium">Category</th>
              <th className="pb-3 pr-4 font-medium">Inflow</th>
              <th className="pb-3 pr-4 font-medium">Outflow</th>
              <th className="pb-3 font-medium">Net</th>
            </tr>
          </thead>
          <tbody>
            {cashFlowTable.map((r) => (
              <tr key={r.category} className="border-b border-border/30">
                <td className="py-2.5 pr-4 font-medium text-foreground">{r.category}</td>
                <td className="py-2.5 pr-4 text-success">{r.inflow}</td>
                <td className="py-2.5 pr-4 text-destructive">{r.outflow}</td>
                <td className="py-2.5 font-medium text-foreground">{r.net}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  </DashboardLayout>
);

export default FinancialDashboard;
