import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, CalendarCheck, LogIn, LogOut, CheckCircle, AlertCircle, MapPin, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const schedule = [
  { day: "Monday", client: "John Mwangi", location: "Westlands", time: "8:00 AM – 5:00 PM", status: "confirmed" },
  { day: "Tuesday", client: "Alice Kamau", location: "Kilimani", time: "7:00 AM – 3:00 PM", status: "confirmed" },
  { day: "Wednesday", client: "Peter Odhiambo", location: "Karen", time: "9:00 AM – 6:00 PM", status: "pending" },
  { day: "Thursday", client: "John Mwangi", location: "Westlands", time: "8:00 AM – 5:00 PM", status: "confirmed" },
  { day: "Friday", client: "Grace Njeri", location: "Lavington", time: "10:00 AM – 4:00 PM", status: "confirmed" },
];

const timeLog = [
  { date: "Feb 3, 2026", clockIn: "7:58 AM", clockOut: "5:02 PM", hours: "9h 4m", client: "John Mwangi" },
  { date: "Feb 4, 2026", clockIn: "6:55 AM", clockOut: "3:05 PM", hours: "8h 10m", client: "Alice Kamau" },
  { date: "Feb 6, 2026", clockIn: "8:02 AM", clockOut: "4:58 PM", hours: "8h 56m", client: "John Mwangi" },
  { date: "Feb 7, 2026", clockIn: "9:50 AM", clockOut: "4:10 PM", hours: "6h 20m", client: "Grace Njeri" },
];

const CaregiverPortal = () => {
  const [clockedIn, setClockedIn] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Caregiver <span className="gradient-text">Portal</span></h1>
            <p className="mt-1 text-muted-foreground">Welcome back, Grace Wanjiku</p>
          </div>
          <div className="flex gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="secondary" className="gap-1 px-3 py-1.5 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" /> KYC Verified
                </Badge>
              </TooltipTrigger>
              <TooltipContent>Your identity and credentials have been verified</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="lg"
                  className={clockedIn ? "bg-destructive text-destructive-foreground hover:bg-destructive/90 gap-2" : "gradient-primary border-0 text-primary-foreground gap-2"}
                  onClick={() => setClockedIn(!clockedIn)}
                >
                  {clockedIn ? <><LogOut className="h-4 w-4" /> Clock Out</> : <><LogIn className="h-4 w-4" /> Clock In</>}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{clockedIn ? "End your current shift" : "Start your shift"}</TooltipContent>
            </Tooltip>
          </div>
        </motion.div>

        {/* Status cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "This Week", value: "32h 30m", icon: Clock, desc: "Hours worked" },
            { label: "Upcoming", value: "3 Shifts", icon: CalendarCheck, desc: "Scheduled this week" },
            { label: "Rating", value: "4.9 ★", icon: User, desc: "From 87 reviews" },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="gradient-primary rounded-xl p-3">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="schedule" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="timelog">Time Log</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weekly Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schedule.map((s) => (
                    <div key={s.day} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border p-4">
                      <div className="flex items-center gap-3">
                        <div className="gradient-primary flex h-10 w-10 items-center justify-center rounded-lg text-xs font-bold text-primary-foreground">
                          {s.day.slice(0, 3)}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{s.client}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" /> {s.location}
                            <span>•</span>
                            <Clock className="h-3 w-3" /> {s.time}
                          </div>
                        </div>
                      </div>
                      <Badge variant={s.status === "confirmed" ? "default" : "outline"} className={s.status === "confirmed" ? "gradient-primary border-0 text-primary-foreground" : ""}>
                        {s.status === "confirmed" ? <><CheckCircle className="mr-1 h-3 w-3" /> Confirmed</> : <><AlertCircle className="mr-1 h-3 w-3" /> Pending</>}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timelog">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Time Log</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left text-muted-foreground">
                        <th className="pb-3 pr-4 font-medium">Date</th>
                        <th className="pb-3 pr-4 font-medium">Client</th>
                        <th className="pb-3 pr-4 font-medium">Clock In</th>
                        <th className="pb-3 pr-4 font-medium">Clock Out</th>
                        <th className="pb-3 font-medium">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timeLog.map((t) => (
                        <tr key={t.date} className="border-b border-border/50">
                          <td className="py-3 pr-4 font-medium text-foreground">{t.date}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{t.client}</td>
                          <td className="py-3 pr-4 text-success">{t.clockIn}</td>
                          <td className="py-3 pr-4 text-destructive">{t.clockOut}</td>
                          <td className="py-3 font-semibold text-foreground">{t.hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default CaregiverPortal;
