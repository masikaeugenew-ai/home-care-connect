import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, CalendarCheck, LogIn, LogOut, CheckCircle, AlertCircle, MapPin, User, Upload, FileCheck, ShieldCheck, Calendar, Ban } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const schedule = [
  { day: "Monday", client: "John Mwangi", location: "Westlands", time: "8:00 AM – 5:00 PM", status: "confirmed" },
  { day: "Tuesday", client: "Alice Kamau", location: "Kilimani", time: "7:00 AM – 3:00 PM", status: "confirmed" },
  { day: "Wednesday", client: "Peter Odhiambo", location: "Karen", time: "9:00 AM – 6:00 PM", status: "pending" },
  { day: "Thursday", client: "John Mwangi", location: "Westlands", time: "8:00 AM – 5:00 PM", status: "confirmed" },
  { day: "Friday", client: "Grace Njeri", location: "Lavington", time: "10:00 AM – 4:00 PM", status: "confirmed" },
];

const calendarWeek = [
  { day: "Mon", date: 9, slots: [{ time: "8AM–5PM", client: "John M.", type: "booked" }] },
  { day: "Tue", date: 10, slots: [{ time: "7AM–3PM", client: "Alice K.", type: "booked" }] },
  { day: "Wed", date: 11, slots: [{ time: "9AM–6PM", client: "Peter O.", type: "pending" }] },
  { day: "Thu", date: 12, slots: [{ time: "8AM–5PM", client: "John M.", type: "booked" }] },
  { day: "Fri", date: 13, slots: [{ time: "10AM–4PM", client: "Grace N.", type: "booked" }] },
  { day: "Sat", date: 14, slots: [{ time: "12PM–2PM", client: "", type: "blocked" }] },
  { day: "Sun", date: 15, slots: [] },
];

const timeLog = [
  { date: "Feb 3, 2026", clockIn: "7:58 AM", clockOut: "5:02 PM", hours: "9h 4m", client: "John Mwangi" },
  { date: "Feb 4, 2026", clockIn: "6:55 AM", clockOut: "3:05 PM", hours: "8h 10m", client: "Alice Kamau" },
  { date: "Feb 6, 2026", clockIn: "8:02 AM", clockOut: "4:58 PM", hours: "8h 56m", client: "John Mwangi" },
  { date: "Feb 7, 2026", clockIn: "9:50 AM", clockOut: "4:10 PM", hours: "6h 20m", client: "Grace Njeri" },
];

const verificationDocs = [
  { name: "National ID", status: "verified", uploadDate: "Jan 15, 2026" },
  { name: "Professional Certificate", status: "verified", uploadDate: "Jan 15, 2026" },
  { name: "Police Clearance", status: "verified", uploadDate: "Jan 16, 2026" },
  { name: "First Aid Certificate", status: "pending", uploadDate: "Feb 5, 2026" },
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
              <TooltipContent>{clockedIn ? "End your current shift" : "Start your shift (must be within 100m of service location)"}</TooltipContent>
            </Tooltip>
          </div>
        </motion.div>

        {clockedIn && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mb-6">
            <div className="flex items-center gap-2 rounded-xl border border-success/30 bg-success/5 p-3 text-sm text-success">
              <MapPin className="h-4 w-4" />
              <span>Clocked in at Westlands, Nairobi — Geo-fence verified (within 100m)</span>
              <span className="ml-auto text-xs text-muted-foreground">Since 8:02 AM</span>
            </div>
          </motion.div>
        )}

        {/* Status cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "This Week", value: "32h 30m", icon: Clock, desc: "Hours worked" },
            { label: "Upcoming", value: "3 Shifts", icon: CalendarCheck, desc: "Scheduled this week" },
            { label: "Rating", value: "4.9 ★", icon: User, desc: "From 87 verified reviews" },
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

        <Tabs defaultValue="calendar" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl">
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="timelog">Time Log</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="verification">KYC</TabsTrigger>
          </TabsList>

          {/* Calendar View */}
          <TabsContent value="calendar">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Weekly Calendar</CardTitle>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs gap-1"><div className="h-2 w-2 rounded-full bg-primary" /> Booked</Badge>
                  <Badge variant="secondary" className="text-xs gap-1"><div className="h-2 w-2 rounded-full bg-warning" /> Pending</Badge>
                  <Badge variant="secondary" className="text-xs gap-1"><div className="h-2 w-2 rounded-full bg-muted-foreground" /> Travel/Blocked</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {calendarWeek.map((d) => (
                    <div key={d.day} className="rounded-xl border border-border p-3 min-h-[120px]">
                      <div className="text-center mb-2">
                        <p className="text-xs text-muted-foreground">{d.day}</p>
                        <p className="text-lg font-bold text-foreground">{d.date}</p>
                      </div>
                      {d.slots.map((slot, si) => (
                        <div
                          key={si}
                          className={`rounded-lg p-2 text-xs mb-1 ${
                            slot.type === "booked" ? "bg-primary/10 border border-primary/20 text-primary" :
                            slot.type === "pending" ? "bg-warning/10 border border-warning/20 text-warning" :
                            "bg-muted border border-border text-muted-foreground"
                          }`}
                        >
                          <p className="font-medium">{slot.time}</p>
                          {slot.client && <p className="text-[10px] mt-0.5">{slot.client}</p>}
                          {slot.type === "blocked" && <p className="text-[10px] mt-0.5 flex items-center gap-0.5"><Ban className="h-2.5 w-2.5" /> Travel time</p>}
                        </div>
                      ))}
                      {d.slots.length === 0 && (
                        <p className="text-[10px] text-muted-foreground text-center mt-2">Available</p>
                      )}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  💡 Tip: Block travel time between bookings to avoid overlapping assignments. Geo-fencing restricts clock-in to your assigned region.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

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

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profile & Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input defaultValue="Grace Wanjiku" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input defaultValue="+254 712 345 678" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Bio</Label>
                  <Textarea defaultValue="Experienced caregiver specializing in elderly care with 8 years of professional experience. Certified in first aid and geriatric care. Passionate about providing compassionate, reliable support to families in need." rows={3} />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label>Specialty</Label>
                    <Select defaultValue="elderly">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="elderly">Elderly Care</SelectItem>
                        <SelectItem value="postsurgery">Post-Surgery</SelectItem>
                        <SelectItem value="childcare">Child Care</SelectItem>
                        <SelectItem value="disability">Disability Support</SelectItem>
                        <SelectItem value="palliative">Palliative Care</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Default Location</Label>
                    <Select defaultValue="westlands">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="westlands">Westlands, Nairobi</SelectItem>
                        <SelectItem value="kilimani">Kilimani, Nairobi</SelectItem>
                        <SelectItem value="karen">Karen, Nairobi</SelectItem>
                        <SelectItem value="mombasa">Mombasa</SelectItem>
                        <SelectItem value="eldoret">Eldoret</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Hourly Rate (KES)</Label>
                    <Input type="number" defaultValue="1500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Availability</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <Badge
                        key={day}
                        variant={["Mon", "Tue", "Thu", "Fri"].includes(day) ? "default" : "outline"}
                        className={["Mon", "Tue", "Thu", "Fri"].includes(day) ? "gradient-primary border-0 text-primary-foreground cursor-pointer" : "cursor-pointer"}
                      >
                        {day}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="gradient-primary border-0 text-primary-foreground">Save Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* KYC Verification Tab */}
          <TabsContent value="verification">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" /> KYC Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm text-foreground font-medium">Verification Status: <span className="text-success">Approved</span></p>
                  <p className="text-xs text-muted-foreground mt-1">Your identity has been verified. Verified caregivers receive priority in search results and booking matches.</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Uploaded Documents</h4>
                  {verificationDocs.map((doc) => (
                    <div key={doc.name} className="flex items-center justify-between rounded-lg border border-border p-4">
                      <div className="flex items-center gap-3">
                        <div className={`rounded-lg p-2 ${doc.status === "verified" ? "bg-success/10" : "bg-warning/10"}`}>
                          {doc.status === "verified" ? <FileCheck className="h-4 w-4 text-success" /> : <Clock className="h-4 w-4 text-warning" />}
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">Uploaded {doc.uploadDate}</p>
                        </div>
                      </div>
                      <Badge variant={doc.status === "verified" ? "secondary" : "outline"} className={doc.status === "verified" ? "text-success" : "text-warning"}>
                        {doc.status === "verified" ? "Verified" : "Under Review"}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border-2 border-dashed border-border p-8 text-center">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-3" />
                  <p className="text-sm font-medium text-foreground">Upload Additional Documents</p>
                  <p className="text-xs text-muted-foreground mt-1">National ID, certificates, police clearance (PDF, JPG, PNG — max 5MB)</p>
                  <Button variant="outline" size="sm" className="mt-4 gap-2">
                    <Upload className="h-3.5 w-3.5" /> Choose File
                  </Button>
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
