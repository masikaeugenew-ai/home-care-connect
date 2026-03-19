import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { name: "Sarah Kamau", location: "Nairobi", rating: 5, text: "HomeCare gave us peace of mind. Our mother's caregiver is punctual, verified, and genuinely caring. The geo-fenced clock-in lets us know when she arrives every morning.", photo: "SK" },
  { name: "David Omondi", location: "Kisumu", rating: 5, text: "Living in London, I worried about Dad's recovery after surgery. HomeCare matched us with James — the daily reports and clock-in notifications made all the difference.", photo: "DO" },
  { name: "Amina Hassan", location: "Mombasa", rating: 5, text: "The verification process is thorough. I trust that my grandmother is in safe hands. The booking flow was so simple and the caregiver was at our door the next day.", photo: "AH" },
  { name: "Peter Njoroge", location: "Nakuru", rating: 4, text: "We needed respite care while my wife and I took a short break. The caregiver was professional, warm, and followed every instruction. Will definitely book again.", photo: "PN" },
  { name: "Esther Wambui", location: "Kiambu", rating: 5, text: "After my father's heart surgery, HomeCare provided a specialised caregiver who understood cardiac recovery. The level of professionalism exceeded our expectations.", photo: "EW" },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const goNext = useCallback(() => {
    setDir(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const goPrev = () => {
    setDir(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const t = testimonials[current];

  return (
    <div className="relative mx-auto max-w-2xl">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={current}
          custom={dir}
          initial={{ x: dir * 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: dir * -60, opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Card className="border-border/50 shadow-md">
            <CardContent className="p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                {t.photo}
              </div>
              <div className="mb-3 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-accent text-accent" : "text-muted"}`} />
                ))}
              </div>
              <p className="text-foreground leading-relaxed italic">"{t.text}"</p>
              <div className="mt-4">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.location}</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <button onClick={goPrev} className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 rounded-full border border-border bg-card p-2 shadow-sm transition-colors hover:bg-muted hidden md:block" aria-label="Previous testimonial">
        <ChevronLeft className="h-5 w-5 text-muted-foreground" />
      </button>
      <button onClick={goNext} className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 rounded-full border border-border bg-card p-2 shadow-sm transition-colors hover:bg-muted hidden md:block" aria-label="Next testimonial">
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </button>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }} className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-accent" : "w-2 bg-border"}`} aria-label={`Go to testimonial ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
