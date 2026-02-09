import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Star, MapPin, Clock, Shield, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const caregivers = [
  { id: 1, name: "Grace Wanjiku", location: "Westlands, Nairobi", rating: 4.9, reviews: 87, specialty: "Elderly Care", experience: "8 years", rate: "KES 1,500/day", verified: true, available: true },
  { id: 2, name: "Mary Akinyi", location: "Kilimani, Nairobi", rating: 4.8, reviews: 62, specialty: "Post-Surgery", experience: "5 years", rate: "KES 1,800/day", verified: true, available: true },
  { id: 3, name: "Florence Muthoni", location: "Karen, Nairobi", rating: 4.9, reviews: 104, specialty: "Child Care", experience: "10 years", rate: "KES 1,200/day", verified: true, available: false },
  { id: 4, name: "Sarah Chebet", location: "Eldoret, Uasin Gishu", rating: 4.7, reviews: 45, specialty: "Disability Support", experience: "6 years", rate: "KES 1,400/day", verified: true, available: true },
  { id: 5, name: "Jane Nyambura", location: "Mombasa, Coast", rating: 4.8, reviews: 73, specialty: "Elderly Care", experience: "7 years", rate: "KES 1,300/day", verified: true, available: true },
  { id: 6, name: "Agnes Wambui", location: "Thika, Kiambu", rating: 4.6, reviews: 38, specialty: "Post-Surgery", experience: "4 years", rate: "KES 1,100/day", verified: true, available: true },
];

const FindCaregiver = () => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("all");

  const filtered = caregivers.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.location.toLowerCase().includes(search.toLowerCase());
    const matchSpec = specialty === "all" || c.specialty === specialty;
    return matchSearch && matchSpec;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Find a <span className="gradient-text">Caregiver</span></h1>
          <p className="mt-2 text-muted-foreground">Browse verified caregivers near you</p>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search by name or location..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
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
              </div>
            </TooltipTrigger>
            <TooltipContent>Filter caregivers by their specialty</TooltipContent>
          </Tooltip>
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
                        <TooltipContent>KYC verified caregiver</TooltipContent>
                      </Tooltip>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">{cg.specialty}</Badge>
                    <Badge variant={cg.available ? "default" : "outline"} className={cg.available ? "gradient-primary border-0 text-primary-foreground" : ""}>
                      {cg.available ? "Available" : "Unavailable"}
                    </Badge>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Star className="h-4 w-4 text-warning" /> {cg.rating} ({cg.reviews})
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="h-4 w-4" /> {cg.experience}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-semibold text-foreground">{cg.rate}</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm" className="gradient-primary border-0 text-primary-foreground" disabled={!cg.available}>
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
    </div>
  );
};

export default FindCaregiver;
