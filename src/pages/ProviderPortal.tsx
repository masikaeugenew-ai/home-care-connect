import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, CreditCard, FileText, Users, ArrowRight, Shield, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const portalFeatures = [
  { icon: Building2, title: "Organisation Management", desc: "Manage your organisation's care programmes, add beneficiaries, and oversee caregiver assignments from a single dashboard." },
  { icon: CreditCard, title: "Centralised Billing", desc: "Consolidated invoicing, payment tracking, and budget management for all care services under your organisation." },
  { icon: FileText, title: "Compliance & Reporting", desc: "Automated care reports, KYC verification status, and regulatory compliance documentation for auditing." },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Real-time dashboards showing care hours, caregiver performance, satisfaction scores, and cost analysis." },
  { icon: Users, title: "Beneficiary Portal", desc: "Allow employees or members to self-enroll, select caregivers, and manage their own care schedules." },
  { icon: Shield, title: "Insurance Integration", desc: "Seamless integration with health insurance providers for claims processing and pre-authorisation workflows." },
];

const ProviderPortal = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-6">
            <Building2 className="h-4 w-4" /> For Corporates, Insurers & NGOs
          </span>
          <h1 className="text-4xl font-extrabold font-display text-foreground sm:text-5xl">
            Provider & <span className="text-accent">Payer Portal</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Manage employee wellness programmes, insurance-funded care packages, or NGO beneficiary care — all from one centralised platform with full visibility and compliance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
              Request a Demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Contact Sales
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portalFeatures.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Card className="h-full border-border/50 transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-7">
                  <div className="mb-4 inline-flex rounded-xl p-3 bg-primary/10">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold font-display text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ProviderPortal;
