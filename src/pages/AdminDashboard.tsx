import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, TrendingUp, Clock, MapPin, CheckCircle, AlertCircle, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const monthlyData = [
  { month: "Sep", bookings: 320, revenue: 480 },
  { month: "Oct", bookings: 410, revenue: 615 },
  { month: "Nov", bookings: 380, revenue: 570 },
  { month: "Dec", bookings: 450, revenue: 675 },
  { month: "Jan", bookings: 520, revenue: 780 },
  { month: "Feb", bookings: 580, revenue: 870 },
];

const regionData = [
  { name: "Nairobi", value: 45 },
  { name: "Mombasa", value: 18 },
  { name: "Kisumu", value: 12 },
  { name: "Eldoret", value: 10 },
  { name: "Others", value: 15 },
];

const COLORS = ["hsl(215 90% 42%)", "hsl(200 80% 55%)", "hsl(152 60% 42%)", "hsl(38 92% 50%)", "hsl(215 20% 65%)"];

const recentBookings = [
  { id: 1, client: "John Mwangi", caregiver: "Grace Wanjiku", location: "Westlands", status: "active", date: "Feb 9" },
  { id: 2, client: "Alice Kamau", caregiver: "Mary Akinyi", location: "Kilimani", status: "completed", date: "Feb 8" },
  { id: 3, client: "Peter Odhiambo", caregiver: "Florence Muthoni", location: "Karen", status: "pending", date: "Feb 8" },
  { id: 4, client: "Lucy Wangari", caregiver: "Sarah Chebet", location: "Eldoret", status: "active", date: "Feb 7" },
  { id: 5, client: "James Kiprop", caregiver: "Jane Nyambura", location: "Mombasa", status: "completed", date: "Feb 7" },
];

const kpis = [
  { label: "Total Caregivers", value: "2,547", change: "+12%", up: true, icon: Users },
  { label: "Active Bookings", value: "384", change: "+8%", up: true, icon: Heart },
  { label: "Revenue (KES)", value: "8.7M", change: "+15%", up: true, icon: TrendingUp },
  { label: "Avg Response Time", value: "12 min", change: "-3min", up: true, icon: Clock },
];

const chartConfig = {
  bookings: { label: "Bookings", color: "hsl(215 90% 42%)" },
  revenue: { label: "Revenue (K KES)", color: "hsl(200 80% 55%)" },
};

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin <span className="gradient-text">Dashboard</span></h1>
          <p className="mt-1 text-muted-foreground">Platform analytics & management</p>
        </motion.div>

        {/* KPIs */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, i) => (
            <motion.div key={kpi.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="cursor-default">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="gradient-primary rounded-xl p-2.5">
                          <kpi.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className={`flex items-center gap-1 text-xs font-medium ${kpi.up ? "text-success" : "text-destructive"}`}>
                          {kpi.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                          {kpi.change}
                        </span>
                      </div>
                      <p className="mt-3 text-2xl font-bold text-foreground">{kpi.value}</p>
                      <p className="text-xs text-muted-foreground">{kpi.label}</p>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>Compared to last month</TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="mb-8 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Bookings & Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 30% 90%)" />
                  <XAxis dataKey="month" stroke="hsl(215 20% 46%)" fontSize={12} />
                  <YAxis stroke="hsl(215 20% 46%)" fontSize={12} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="bookings" fill="hsl(215 90% 42%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="revenue" fill="hsl(200 80% 55%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Regional Distribution</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={regionData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                    {regionData.map((_, idx) => (
                      <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-2 flex flex-wrap justify-center gap-3">
                {regionData.map((r, i) => (
                  <div key={r.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i] }} />
                    {r.name} ({r.value}%)
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent bookings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="pb-3 pr-4 font-medium">Client</th>
                    <th className="pb-3 pr-4 font-medium">Caregiver</th>
                    <th className="pb-3 pr-4 font-medium">Location</th>
                    <th className="pb-3 pr-4 font-medium">Date</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((b) => (
                    <tr key={b.id} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium text-foreground">{b.client}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{b.caregiver}</td>
                      <td className="py-3 pr-4 text-muted-foreground"><MapPin className="mr-1 inline h-3 w-3" />{b.location}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{b.date}</td>
                      <td className="py-3">
                        <Badge variant={b.status === "active" ? "default" : b.status === "completed" ? "secondary" : "outline"}
                          className={b.status === "active" ? "gradient-primary border-0 text-primary-foreground" : ""}>
                          {b.status === "active" && <CheckCircle className="mr-1 h-3 w-3" />}
                          {b.status === "pending" && <AlertCircle className="mr-1 h-3 w-3" />}
                          {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
