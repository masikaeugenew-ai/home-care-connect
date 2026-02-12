import { Bell, Download, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface TopBarProps {
  title: string;
}

const TopBar = ({ title }: TopBarProps) => (
  <header className="glass-topbar sticky top-0 z-30 flex items-center justify-between px-6 py-3">
    <h1 className="text-xl font-display text-foreground">{title}</h1>

    <div className="flex items-center gap-3">
      {/* Date Range */}
      <Select defaultValue="30">
        <SelectTrigger className="h-8 w-[140px] rounded-xl text-xs glass-card border-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="7">Last 7 days</SelectItem>
          <SelectItem value="30">Last 30 days</SelectItem>
          <SelectItem value="90">Last 90 days</SelectItem>
          <SelectItem value="custom">Custom</SelectItem>
        </SelectContent>
      </Select>

      {/* Region filter */}
      <Select defaultValue="nairobi">
        <SelectTrigger className="h-8 w-[120px] rounded-xl text-xs glass-card border-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Regions</SelectItem>
          <SelectItem value="nairobi">Nairobi</SelectItem>
          <SelectItem value="mombasa">Mombasa</SelectItem>
          <SelectItem value="kisumu">Kisumu</SelectItem>
          <SelectItem value="eldoret">Eldoret</SelectItem>
        </SelectContent>
      </Select>

      {/* Export */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl">
            <Download className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Export CSV</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl">
            <FileText className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Export PDF</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-destructive" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Notifications</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Settings</TooltipContent>
      </Tooltip>
    </div>
  </header>
);

export default TopBar;
