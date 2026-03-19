import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Heart, Home, Stethoscope, HeartPulse, Sun } from "lucide-react";

const services = [
  { icon: Heart, title: "Elderly Care", desc: "Daily companionship, mobility assistance, medication reminders and nutritious meal preparation for your loved ones.", color: "bg-primary/10 text-primary" },
  { icon: Home, title: "Private Home Care", desc: "Personalised in-home nursing and personal care tailored to individual needs, delivered by qualified professionals.", color: "bg-accent/10 text-accent" },
  { icon: Stethoscope, title: "Post-Surgery Care", desc: "Expert recovery monitoring, wound care, physiotherapy support and follow-up coordination after hospital discharge.", color: "bg-primary/10 text-primary" },
  { icon: HeartPulse, title: "Heart-Failure Care", desc: "Specialised cardiac care including medication management, vital monitoring and lifestyle support for chronic conditions.", color: "bg-accent/10 text-accent" },
  { icon: Sun, title: "Respite Care", desc: "Short-term professional care so family caregivers can rest, recharge and take care of their own well-being.", color: "bg-primary/10 text-primary" },
];

const ServiceCategories = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {services.map((s, i) => (
      <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
        <Card className="group h-full border-border/50 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <CardContent className="p-7">
            <div className={`mb-4 inline-flex rounded-xl p-3 ${s.color}`}>
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-bold font-display text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default ServiceCategories;
