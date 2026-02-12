import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import GlassCard from "@/components/dashboard/GlassCard";
import { marketingKPIs, trafficTrend, contentEngagement, messagingTests } from "@/data/mockData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

const MarketingDashboard = () => (
  <DashboardLayout title="Marketing Dashboard">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {marketingKPIs.map((kpi) => (
        <KPICard key={kpi.label} {...kpi} />
      ))}
    </div>

    <GlassCard>
      <h3 className="text-lg font-display text-foreground mb-4">Traffic & Signups</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={trafficTrend}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 25% 88%)" />
          <XAxis dataKey="week" fontSize={12} stroke="hsl(215 20% 46%)" />
          <YAxis fontSize={12} stroke="hsl(215 20% 46%)" />
          <Tooltip contentStyle={{ borderRadius: '12px', background: 'rgba(255,255,255,0.9)' }} />
          <Legend />
          <Line type="monotone" dataKey="traffic" name="Traffic" stroke="hsl(213 88% 34%)" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="signups" name="Signups" stroke="hsl(152 60% 42%)" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </GlassCard>

    <div className="grid gap-6 lg:grid-cols-2">
      <GlassCard>
        <h3 className="text-lg font-display text-foreground mb-4">Content Engagement</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 text-left text-muted-foreground">
                <th className="pb-3 pr-4 font-medium">Content</th>
                <th className="pb-3 pr-4 font-medium">Views</th>
                <th className="pb-3 pr-4 font-medium">CTR</th>
                <th className="pb-3 font-medium">Conversions</th>
              </tr>
            </thead>
            <tbody>
              {contentEngagement.map((c) => (
                <tr key={c.content} className="border-b border-border/30">
                  <td className="py-2.5 pr-4 font-medium text-foreground">{c.content}</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{c.views.toLocaleString()}</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{c.ctr}</td>
                  <td className="py-2.5 text-muted-foreground">{c.conversions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="text-lg font-display text-foreground mb-4">Messaging Tests</h3>
        <div className="space-y-3">
          {messagingTests.map((m) => (
            <div key={m.message} className={`flex items-center justify-between rounded-xl p-3 border ${m.winner ? 'bg-success/5 border-success/20' : 'bg-white/40 border-white/30'}`}>
              <div className="flex items-center gap-2">
                {m.winner && <Trophy className="h-4 w-4 text-success" />}
                <p className="text-sm text-foreground">{m.message}</p>
              </div>
              <Badge variant={m.winner ? "default" : "secondary"} className={m.winner ? "gradient-primary border-0 text-white" : ""}>
                {m.ctr}
              </Badge>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  </DashboardLayout>
);

export default MarketingDashboard;
