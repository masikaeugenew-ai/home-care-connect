import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import GlassCard from "./GlassCard";

interface KPICardProps {
  label: string;
  value: string;
  change: string;
  up: boolean;
}

const KPICard = ({ label, value, change, up }: KPICardProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <div>
        <GlassCard className="cursor-default transition-all hover:shadow-lg hover:scale-[1.02]">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
          <p className="mt-2 text-2xl font-bold text-foreground font-display">{value}</p>
          {change && (
            <span className={`mt-1 inline-flex items-center gap-1 text-xs font-medium ${up ? "text-success" : "text-destructive"}`}>
              {up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              {change}
            </span>
          )}
        </GlassCard>
      </div>
    </TooltipTrigger>
    <TooltipContent>Compared to previous period</TooltipContent>
  </Tooltip>
);

export default KPICard;
