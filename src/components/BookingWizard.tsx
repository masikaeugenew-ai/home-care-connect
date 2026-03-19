import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, MapPin, Star, Clock, CheckCircle, User, Calendar } from "lucide-react";

const careTypes = [
  { id: "elderly", label: "Elderly Care", desc: "Daily support, mobility, companionship" },
  { id: "private", label: "Private Home Care", desc: "Personalised in-home nursing" },
  { id: "post-surgery", label: "Post-Surgery Care", desc: "Recovery monitoring and wound care" },
  { id: "heart-failure", label: "Heart-Failure Care", desc: "Chronic heart condition management" },
  { id: "respite", label: "Respite Care", desc: "Short-term relief for family carers" },
];

const whoNeedsCare = ["Parent", "Spouse", "Grandparent", "Child", "Myself", "Other"];

const matchedCaregivers = [
  { name: "Grace Wanjiku", specialty: "Elderly Care", rating: 4.9, reviews: 87, rate: 1800, available: "Mon–Sat", photo: "GW", years: 6 },
  { name: "James Ochieng", specialty: "Post-Surgery", rating: 4.8, reviews: 64, rate: 2200, available: "Mon–Fri", photo: "JO", years: 8 },
  { name: "Faith Muthoni", specialty: "Heart-Failure", rating: 5.0, reviews: 42, rate: 2500, available: "All Week", photo: "FM", years: 10 },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 80 : -80, opacity: 0 }),
};

const BookingWizard = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [careType, setCareType] = useState("");
  const [recipient, setRecipient] = useState("");
  const [booked, setBooked] = useState<string | null>(null);

  const next = () => { setDirection(1); setStep((s) => Math.min(s + 1, 3)); };
  const prev = () => { setDirection(-1); setStep((s) => Math.max(s - 1, 1)); };

  const stepLabels = ["Care Type", "Details", "Match & Book"];

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress */}
      <div className="mb-8 flex items-center justify-center gap-2">
        {stepLabels.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${step > i + 1 ? "bg-success text-success-foreground" : step === i + 1 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
              {step > i + 1 ? <CheckCircle className="h-4 w-4" /> : i + 1}
            </div>
            <span className={`hidden text-sm font-medium sm:inline ${step === i + 1 ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
            {i < 2 && <div className="mx-2 h-px w-8 bg-border" />}
          </div>
        ))}
      </div>

      <Card className="overflow-hidden border-border/50 shadow-lg">
        <CardContent className="p-8">
          <AnimatePresence mode="wait" custom={direction}>
            {step === 1 && (
              <motion.div key="step1" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="mb-6 text-xl font-bold font-display text-foreground">What type of care do you need?</h3>
                <RadioGroup value={careType} onValueChange={setCareType} className="grid gap-3 sm:grid-cols-2">
                  {careTypes.map((ct) => (
                    <Label key={ct.id} htmlFor={ct.id} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${careType === ct.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/40"}`}>
                      <RadioGroupItem value={ct.id} id={ct.id} className="mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">{ct.label}</div>
                        <div className="text-sm text-muted-foreground">{ct.desc}</div>
                      </div>
                    </Label>
                  ))}
                </RadioGroup>
                <div className="mt-6">
                  <Label className="mb-2 block text-sm font-medium text-foreground">Who needs care?</Label>
                  <Select value={recipient} onValueChange={setRecipient}>
                    <SelectTrigger><SelectValue placeholder="Select relationship" /></SelectTrigger>
                    <SelectContent>
                      {whoNeedsCare.map((w) => <SelectItem key={w} value={w}>{w}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-8 flex justify-end">
                  <Button onClick={next} disabled={!careType || !recipient} className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                    Continue <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="mb-6 text-xl font-bold font-display text-foreground">Care Details & Schedule</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label className="mb-1 block text-sm font-medium">Address / Location</Label>
                    <Input placeholder="e.g. Kileleshwa, Nairobi" />
                  </div>
                  <div>
                    <Label className="mb-1 block text-sm font-medium">County</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select county" /></SelectTrigger>
                      <SelectContent>
                        {["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Kiambu", "Uasin Gishu"].map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="mb-1 block text-sm font-medium">Start Date</Label>
                    <Input type="date" />
                  </div>
                  <div>
                    <Label className="mb-1 block text-sm font-medium">Duration</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="How long?" /></SelectTrigger>
                      <SelectContent>
                        {["1 day", "1 week", "2 weeks", "1 month", "Ongoing"].map((d) => (
                          <SelectItem key={d} value={d}>{d}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-4">
                  <Label className="mb-1 block text-sm font-medium">Special Requirements</Label>
                  <Textarea placeholder="Any medical conditions, mobility needs, dietary requirements…" rows={3} />
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={prev} className="gap-2"><ArrowLeft className="h-4 w-4" /> Back</Button>
                  <Button onClick={next} className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                    Find Caregivers <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="mb-6 text-xl font-bold font-display text-foreground">Your Matched Caregivers</h3>
                {booked ? (
                  <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                      <CheckCircle className="h-8 w-8 text-success" />
                    </div>
                    <h4 className="text-xl font-bold font-display text-foreground">Booking Confirmed!</h4>
                    <p className="mt-2 text-muted-foreground">You've booked <strong>{booked}</strong>. They'll receive a notification and confirm shortly.</p>
                    <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => { setStep(1); setBooked(null); setCareType(""); setRecipient(""); }}>
                      Book Another Caregiver
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <div className="space-y-4">
                      {matchedCaregivers.map((cg, i) => (
                        <motion.div key={cg.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                          <div className="flex flex-col gap-4 rounded-xl border border-border p-5 transition-all hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                                {cg.photo}
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">{cg.name}</div>
                                <div className="text-sm text-muted-foreground">{cg.specialty} · {cg.years} yrs exp</div>
                                <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1"><Star className="h-3 w-3 text-accent" /> {cg.rating} ({cg.reviews})</span>
                                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {cg.available}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-lg font-bold text-foreground">KES {cg.rate.toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/day</span></span>
                              <Button onClick={() => setBooked(cg.name)} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                                Book Now
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-start">
                      <Button variant="outline" onClick={prev} className="gap-2"><ArrowLeft className="h-4 w-4" /> Back</Button>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingWizard;
