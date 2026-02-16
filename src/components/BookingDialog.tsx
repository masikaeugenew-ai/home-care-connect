import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Smartphone, CreditCard, ArrowLeft, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Caregiver {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  specialty: string;
  experience: string;
  rate: string;
  verified: boolean;
  available: boolean;
}

interface BookingDialogProps {
  caregiver: Caregiver | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const generateReceiptId = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "HC-";
  for (let i = 0; i < 8; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
  return result;
};

const parseRate = (rate: string) => {
  const match = rate.match(/[\d,]+/);
  return match ? parseInt(match[0].replace(",", "")) : 0;
};

type Step = "breakdown" | "payment" | "processing" | "success";

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
};

const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.35, ease: "easeOut" as const } }),
};

const BookingDialog = ({ caregiver, open, onOpenChange }: BookingDialogProps) => {
  const [step, setStep] = useState<Step>("breakdown");
  const [direction, setDirection] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [receiptId] = useState(generateReceiptId);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step !== "processing") return;
    setProgress(0);
    const steps = [
      { value: 20, delay: 400 },
      { value: 55, delay: 900 },
      { value: 80, delay: 1500 },
      { value: 100, delay: 2200 },
    ];
    const timers = steps.map(({ value, delay }) =>
      setTimeout(() => setProgress(value), delay)
    );
    const done = setTimeout(() => {
      setDirection(1);
      setStep("success");
    }, 2800);
    return () => { timers.forEach(clearTimeout); clearTimeout(done); };
  }, [step]);

  if (!caregiver) return null;

  const dailyRate = parseRate(caregiver.rate);
  const days = 1;
  const subtotal = dailyRate * days;
  const serviceFee = Math.round(subtotal * 0.1);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + serviceFee + tax;

  const goTo = (next: Step, dir: number) => {
    setDirection(dir);
    setStep(next);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => { setStep("breakdown"); setDirection(1); }, 300);
  };

  const methodLabel = paymentMethod === "mpesa" ? "M-Pesa" : paymentMethod === "airtel" ? "Airtel Money" : "Card";

  const stepContent: Record<Step, React.ReactNode> = {
    breakdown: (
      <motion.div
        key="breakdown"
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Booking Summary</DialogTitle>
          <DialogDescription>Review the cost breakdown for your booking</DialogDescription>
        </DialogHeader>

        <motion.div
          className="mt-4 flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <div className="gradient-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-primary-foreground">
            {caregiver.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <p className="font-semibold text-foreground">{caregiver.name}</p>
            <p className="text-xs text-muted-foreground">{caregiver.specialty} · {caregiver.location}</p>
          </div>
        </motion.div>

        <div className="mt-5 space-y-3 text-sm">
          {[
            { label: `Daily Rate × ${days} day${days > 1 ? "s" : ""}`, value: subtotal, muted: false },
            { label: "Service Fee (10%)", value: serviceFee, muted: true },
            { label: "Tax (5%)", value: tax, muted: true },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={staggerItem}
              initial="hidden"
              animate="show"
              className={`flex justify-between ${item.muted ? "text-muted-foreground" : "text-foreground"}`}
            >
              <span>{item.label}</span>
              <span>KES {item.value.toLocaleString()}</span>
            </motion.div>
          ))}
          <Separator />
          <motion.div
            custom={3}
            variants={staggerItem}
            initial="hidden"
            animate="show"
            className="flex justify-between text-base font-bold text-foreground"
          >
            <span>Total</span>
            <span>KES {total.toLocaleString()}</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.3 }}>
          <Button className="gradient-primary mt-6 w-full border-0 text-primary-foreground" onClick={() => goTo("payment", 1)}>
            Proceed to Payment
          </Button>
        </motion.div>
      </motion.div>
    ),

    payment: (
      <motion.div
        key="payment"
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <DialogHeader>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => goTo("breakdown", -1)}
              className="rounded-md p-1 text-muted-foreground hover:bg-secondary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="h-4 w-4" />
            </motion.button>
            <div>
              <DialogTitle className="font-display text-xl">Payment Method</DialogTitle>
              <DialogDescription>Choose how you'd like to pay KES {total.toLocaleString()}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-5 space-y-3">
          {[
            { value: "mpesa", label: "M-Pesa", desc: "Pay via M-Pesa mobile money", icon: <Smartphone className="h-5 w-5 text-success" /> },
            { value: "airtel", label: "Airtel Money", desc: "Pay via Airtel Money", icon: <Smartphone className="h-5 w-5 text-destructive" /> },
            { value: "card", label: "Card Payment", desc: "Visa, Mastercard, or Amex", icon: <CreditCard className="h-5 w-5 text-primary" /> },
          ].map((pm, i) => (
            <motion.div key={pm.value} custom={i} variants={staggerItem} initial="hidden" animate="show">
              <Label
                htmlFor={pm.value}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-all duration-200 ${
                  paymentMethod === pm.value
                    ? "border-primary bg-secondary/50 shadow-sm"
                    : "border-border hover:bg-secondary/30 hover:border-muted-foreground/30"
                }`}
              >
                <RadioGroupItem value={pm.value} id={pm.value} />
                {pm.icon}
                <div className="flex-1">
                  <span className="font-medium text-foreground">{pm.label}</span>
                  <p className="text-xs text-muted-foreground">{pm.desc}</p>
                </div>
                {pm.value === "mpesa" && <Badge variant="secondary" className="text-xs">Popular</Badge>}
              </Label>
            </motion.div>
          ))}
        </RadioGroup>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.3 }}>
          <Button className="gradient-primary mt-6 w-full border-0 text-primary-foreground" onClick={() => goTo("processing", 1)}>
            Pay KES {total.toLocaleString()}
          </Button>
        </motion.div>
      </motion.div>
    ),

    processing: (
      <motion.div
        key="processing"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="py-8 text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center"
        >
          <Loader2 className="h-10 w-10 text-primary" />
        </motion.div>
        <h2 className="font-display text-xl text-foreground">Processing Payment</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Confirming your {methodLabel} payment...
        </p>
        <div className="mx-auto mt-6 max-w-xs">
          <Progress value={progress} className="h-2 transition-all duration-500" />
          <p className="mt-2 text-xs text-muted-foreground">{progress}% complete</p>
        </div>
      </motion.div>
    ),

    success: (
      <motion.div
        key="success"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <motion.div
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.15 }}
        >
          <motion.div
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <CheckCircle className="h-10 w-10 text-success" />
          </motion.div>
        </motion.div>

        <motion.h2
          className="font-display text-2xl text-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.35 }}
        >
          Payment Successful!
        </motion.h2>
        <motion.p
          className="mt-1 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.3 }}
        >
          Your booking has been confirmed
        </motion.p>

        <motion.div
          className="mt-6 rounded-lg border border-border bg-secondary/50 p-4 text-sm"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
        >
          <div className="flex justify-between">
            <span className="text-muted-foreground">Receipt ID</span>
            <span className="font-mono font-semibold text-foreground">{receiptId}</span>
          </div>
          <Separator className="my-3" />
          <div className="flex justify-between">
            <span className="text-muted-foreground">Caregiver</span>
            <span className="text-foreground">{caregiver.name}</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-muted-foreground">Amount Paid</span>
            <span className="font-semibold text-foreground">KES {total.toLocaleString()}</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-muted-foreground">Method</span>
            <span className="text-foreground">{methodLabel}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <Button className="gradient-primary mt-6 w-full border-0 text-primary-foreground" onClick={handleClose}>
            Done
          </Button>
        </motion.div>
      </motion.div>
    ),
  };

  return (
    <Dialog open={open} onOpenChange={step === "processing" ? undefined : handleClose}>
      <DialogContent className="sm:max-w-md overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {stepContent[step]}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
