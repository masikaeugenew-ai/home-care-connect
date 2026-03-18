import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Star, MapPin, Clock, Shield, Search, Filter, MessageSquareQuote, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import BookingDialog from "@/components/BookingDialog";

const caregivers = [
  { id: 1, name: "Grace Wanjiku", location: "Westlands, Nairobi", rating: 4.9, reviews: 87, specialty: "Elderly Care", experience: "8 years", rate: "KES 1,500/day", verified: true, available: true, referrals: 12, topReview: "Grace was incredible with my mother. Very patient and professional." },
  { id: 2, name: "Mary Akinyi", location: "Kilimani, Nairobi", rating: 4.8, reviews: 62, specialty: "Post-Surgery", experience: "5 years", rate: "KES 1,800/day", verified: true, available: true, referrals: 8, topReview: "Excellent post-surgery care. My father recovered so well under Mary's watch." },
  { id: 3, name: "Florence Muthoni", location: "Karen, Nairobi", rating: 4.9, reviews: 104, specialty: "Child Care", experience: "10 years", rate: "KES 1,200/day", verified: true, available: false, referrals: 15, topReview: "Our kids love Florence. She's dependable and genuinely caring." },
  { id: 4, name: "Sarah Chebet", location: "Eldoret, Uasin Gishu", rating: 4.7, reviews: 45, specialty: "Disability Support", experience: "6 years", rate: "KES 1,400/day", verified: true, available: true, referrals: 5, topReview: "Sarah goes above and beyond. Truly understands disability care needs." },
  { id: 5, name: "Jane Nyambura", location: "Mombasa, Coast", rating: 4.8, reviews: 73, specialty: "Elderly Care", experience: "7 years", rate: "KES 1,300/day", verified: true, available: true, referrals: 9, topReview: "Very reliable and warm. My grandmother looks forward to her visits." },
  { id: 6, name: "Agnes Wambui", location: "Thika, Kiambu", rating: 4.6, reviews: 38, specialty: "Post-Surgery", experience: "4 years", rate: "KES 1,100/day", verified: true, available: true, referrals: 3, topReview: "Agnes is a great caregiver. Very attentive and thorough with care routines." },
];

const FindCaregiver = () => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("all");
  const [location, setLocation] = useState("all");
  const [selectedCaregiver, setSelectedCaregiver] = useState<typeof caregivers[0] | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const filtered = caregivers.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.location.toLowerCase().includes(search.toLowerCase());
    const matchSpec = specialty === "all" || c.specialty === specialty;
    const matchLoc = location === "all" || c.location.toLowerCase().includes(location.toLowerCase());
    return matchSearch && matchSpec && matchLoc;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Find a <span className="gradient-text">Caregiver</span></h1>
          <p className="mt-2 text-muted-foreground">Browse 100% KYC-verified caregivers near you — only verified clients can leave reviews</p>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search by name or location..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <Select value={specialty} onValueChange={setSpecialty}>
            <SelectTrigger className="w-[200px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specialties</SelectItem>
              <SelectItem value="Elderly Care">Elderly Care</SelectItem>
              <SelectItem value="Post-Surgery">Post-Surgery</SelectItem>
              <SelectItem value="Child Care">Child Care</SelectItem>
              <SelectItem value="Disability Support">Disability Support</SelectItem>
            </SelectContent>
          </Select>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-[180px]">
              <MapPin className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="nairobi">Nairobi</SelectItem>
              <SelectItem value="mombasa">Mombasa</SelectItem>
              <SelectItem value="eldoret">Eldoret</SelectItem>
              <SelectItem value="thika">Thika</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Results */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cg, i) => (
            <motion.div key={cg.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card className="group h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="gradient-primary flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-primary-foreground">
                        {cg.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{cg.name}</h3>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" /> {cg.location}
                        </div>
                      </div>
                    </div>
                    {cg.verified && (
                      <Tooltip>
                        <TooltipTrigger>
                          <Shield className="h-5 w-5 text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>KYC verified — ID, certificates & police clearance</TooltipContent>
                      </Tooltip>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">{cg.specialty}</Badge>
                    <Badge variant={cg.available ? "default" : "outline"} className={cg.available ? "gradient-primary border-0 text-primary-foreground" : ""}>
                      {cg.available ? "Available" : "Unavailable"}
                    </Badge>
                    {cg.referrals > 0 && (
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge variant="secondary" className="gap-1 text-xs">
                            <Users className="h-3 w-3" /> {cg.referrals} referrals
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>{cg.referrals} families have referred this caregiver</TooltipContent>
                      </Tooltip>
                    )}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Star className="h-4 w-4 text-warning" /> {cg.rating} ({cg.reviews})
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="h-4 w-4" /> {cg.experience}
                    </div>
                  </div>

                  {/* Verified Review Quote */}
                  {cg.topReview && (
                    <div className="mt-3 rounded-lg bg-secondary/50 p-2.5 text-xs text-muted-foreground italic flex gap-2">
                      <MessageSquareQuote className="h-3.5 w-3.5 shrink-0 mt-0.5 text-primary/60" />
                      <span className="line-clamp-2">"{cg.topReview}"</span>
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-semibold text-foreground">{cg.rate}</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm" className="gradient-primary border-0 text-primary-foreground" disabled={!cg.available} onClick={() => { setSelectedCaregiver(cg); setBookingOpen(true); }}>
                          {cg.available ? "Book Now" : "Unavailable"}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>{cg.available ? "Request this caregiver" : "Currently not available"}</TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            <Search className="mx-auto h-12 w-12 mb-4 opacity-30" />
            <p className="text-lg">No caregivers found matching your criteria.</p>
          </div>
        )}
      </div>
      <Footer />
      <BookingDialog caregiver={selectedCaregiver} open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default FindCaregiver;
