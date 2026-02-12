import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => (
  <div className={cn("glass-card rounded-2xl p-6", className)}>
    {children}
  </div>
);

export default GlassCard;
