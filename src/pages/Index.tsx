import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCategories from "@/components/ServiceCategories";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import BookingWizard from "@/components/BookingWizard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Clock, Users, Heart, Search, Fingerprint, Radio, UserCheck, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const stats = [
  { value: "2,500+", label: "Verified Caregivers" },
  { value: "10,000+", label: "Families Served" },
  { value: "47", label: "Counties Covered" },
  { value: "4.9★", label: "Average Rating" },
];

const metrics = [
  { value: "250+", label: "Families Supported This Month" },
  { value: "5,000+", label: "Hours of Care Delivered" },
  { value: "98%", label: "Clock-In Compliance" },
  { value: "< 24h", label: "Average Match Time" },
];

const features = [
  { icon: Fingerprint, title: "100% KYC Verified", desc: "Every caregiver undergoes strict identity verification — National ID, professional certificates, and police clearance reviewed by our team." },
  { icon: Radio, title: "Geo-Fenced Clock-In", desc: "Caregivers can only clock in within 100 metres of the service location, ensuring accountability and preventing misuse." },
  { icon: Clock, title: "Precise Time Tracking", desc: "Automated clock-in/out tied to booking dates with real-time notifications when your caregiver arrives." },
  { icon: UserCheck, title: "Verified Reviews Only", desc: "Only clients who've completed a booking can leave reviews — building genuine trust, like Airbnb for caregiving." },
];

const values = [
  { title: "Trust", desc: "Every caregiver is background-checked and KYC-verified" },
  { title: "Accountability", desc: "Geo-tagged attendance and structured reporting" },
  { title: "Consistency", desc: "Zero-failure culture once operations are steady" },
  { title: "Empathy", desc: "Compassionate care with professional discipline" },
];

const segments = [
  { icon: Users, title: "Working Professionals", desc: "Caring for elderly parents while managing a career? We handle the daily care so you don't have to choose." },
  { icon: Heart, title: "Diaspora Families", desc: "Supporting relatives back home from abroad? Get peace of mind with verified, monitored care and real-time updates." },
  { icon: MapPin, title: "Long-Term Care", desc: "Need ongoing support for recovery or chronic conditions? Our caregivers provide consistent, reliable daily care." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24">
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" animate="visible" className="space-y-8">
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                  <Shield className="h-4 w-4" /> Kenya's Most Trusted Care Platform
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="text-4xl font-extrabold leading-tight tracking-tight text-foreground font-display sm:text-5xl lg:text-6xl">
                Trusted <span className="text-accent">Home Care</span> for Your Family
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="max-w-lg text-lg text-muted-foreground">
                Connecting Kenyan families with 100% verified, geo-tracked, and professionally managed caregivers. From elderly care to post-surgery recovery — accountability is built into every interaction.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
                  <a href="#booking"><Search className="h-4 w-4" /> Find a Caregiver</a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link to="/caregiver-portal"><Users className="h-4 w-4" /> Join as Caregiver</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-accent/15 blur-2xl" />
                <img src={heroImage} alt="Verified caregiver assisting an elderly person in a Kenyan home" className="relative rounded-2xl shadow-2xl object-cover w-full max-h-[500px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-3xl font-bold font-display text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold font-display text-foreground sm:text-4xl">Our <span className="text-accent">Care Services</span></h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Professional, verified caregiving across five specialised categories — each designed with your family's safety and comfort in mind.</p>
          </div>
          <ServiceCategories />
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold font-display text-foreground sm:text-4xl">Built for Families Who <span className="text-accent">Need Peace of Mind</span></h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Whether you're a working professional, diaspora family, or managing long-term care — we've built HomeCare for you.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {segments.map((seg, i) => (
              <motion.div key={seg.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-4 inline-flex rounded-xl p-3 bg-accent/10">
                    <seg.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold font-display text-foreground">{seg.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{seg.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold font-display text-foreground sm:text-4xl">Why Families <span className="text-accent">Trust Us</span></h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Every feature is designed around trust, accountability, and transparency — the biggest gaps in Kenya's informal caregiving market.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="gradient-primary mb-4 inline-flex rounded-xl p-3">
                    <f.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold font-display text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Wizard */}
      <section id="booking" className="bg-secondary/50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold font-display text-foreground sm:text-4xl">Book a Caregiver in <span className="text-accent">3 Easy Steps</span></h2>
            <p className="mt-4 text-muted-foreground">Choose your care type, enter your details, and get matched instantly.</p>
          </div>
          <BookingWizard />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold font-display text-foreground sm:text-4xl">What <span className="text-accent">Families Say</span></h2>
            <p className="mt-4 text-muted-foreground">Verified reviews from real clients who trust HomeCare.</p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl font-bold font-display text-accent">{m.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold font-display text-foreground sm:text-4xl">Our Core <span className="text-accent">Values</span></h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-md">
                  <h3 className="text-lg font-bold font-display text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="gradient-hero rounded-3xl p-12 text-center text-primary-foreground md:p-16">
            <h2 className="text-3xl font-bold font-display sm:text-4xl">Your Family Deserves Trusted Care</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">Join thousands of Kenyan families who trust HomeCare for verified, accountable, and compassionate caregiving services.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2" asChild>
                <a href="#booking"><Search className="h-4 w-4" /> Get Started Now</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2" asChild>
                <Link to="/caregiver-portal"><ArrowRight className="h-4 w-4" /> Apply as Caregiver</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
