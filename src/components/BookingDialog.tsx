import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Smartphone, CreditCard, ArrowLeft } from "lucide-react";
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

type Step = "breakdown" | "payment" | "success";

const BookingDialog = ({ caregiver, open, onOpenChange }: BookingDialogProps) => {
  const [step, setStep] = useState<Step>("breakdown");
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [receiptId] = useState(generateReceiptId);

  if (!caregiver) return null;

  const dailyRate = parseRate(caregiver.rate);
  const days = 1;
  const subtotal = dailyRate * days;
  const serviceFee = Math.round(subtotal * 0.1);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + serviceFee + tax;

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => setStep("breakdown"), 300);
  };

  const stepContent = {
    breakdown: (
      <motion.div key="breakdown" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Booking Summary</DialogTitle>
          <DialogDescription>Review the cost breakdown for your booking</DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex items-center gap-3 rounded-lg border border-border bg-secondary/50 p-3">
          <div className="gradient-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-primary-foreground">
            {caregiver.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <p className="font-semibold text-foreground">{caregiver.name}</p>
            <p className="text-xs text-muted-foreground">{caregiver.specialty} · {caregiver.location}</p>
          </div>
        </div>

        <div className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between text-foreground">
            <span>Daily Rate × {days} day{days > 1 ? "s" : ""}</span>
            <span>KES {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Service Fee (10%)</span>
            <span>KES {serviceFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Tax (5%)</span>
            <span>KES {tax.toLocaleString()}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-base font-bold text-foreground">
            <span>Total</span>
            <span>KES {total.toLocaleString()}</span>
          </div>
        </div>

        <Button className="gradient-primary mt-6 w-full border-0 text-primary-foreground" onClick={() => setStep("payment")}>
          Proceed to Payment
        </Button>
      </motion.div>
    ),

    payment: (
      <motion.div key="payment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
        <DialogHeader>
          <div className="flex items-center gap-2">
            <button onClick={() => setStep("breakdown")} className="rounded-md p-1 text-muted-foreground hover:bg-secondary">
              <ArrowLeft className="h-4 w-4" />
            </button>
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
          ].map((pm) => (
            <Label
              key={pm.value}
              htmlFor={pm.value}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                paymentMethod === pm.value ? "border-primary bg-secondary/50" : "border-border hover:bg-secondary/30"
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
          ))}
        </RadioGroup>

        <Button className="gradient-primary mt-6 w-full border-0 text-primary-foreground" onClick={() => setStep("success")}>
          Pay KES {total.toLocaleString()}
        </Button>
      </motion.div>
    ),

    success: (
      <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <CheckCircle className="h-10 w-10 text-success" />
        </div>
        <h2 className="font-display text-2xl text-foreground">Payment Successful!</h2>
        <p className="mt-1 text-sm text-muted-foreground">Your booking has been confirmed</p>

        <div className="mt-6 rounded-lg border border-border bg-secondary/50 p-4 text-sm">
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
            <span className="text-foreground">{paymentMethod === "mpesa" ? "M-Pesa" : paymentMethod === "airtel" ? "Airtel Money" : "Card"}</span>
          </div>
        </div>

        <Button className="gradient-primary mt-6 w-full border-0 text-primary-foreground" onClick={handleClose}>
          Done
        </Button>
      </motion.div>
    ),
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <AnimatePresence mode="wait">{stepContent[step]}</AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
