import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="gradient-primary rounded-lg p-2">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Home<span className="gradient-text">Care</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/find-caregiver" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Find a Caregiver
          </Link>
          <Link to="/caregiver-portal" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            For Caregivers
          </Link>
          <Link to="/admin" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Dashboard
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild>
            <Link to="/find-caregiver">Log In</Link>
          </Button>
          <Button className="gradient-primary border-0 text-primary-foreground" asChild>
            <Link to="/find-caregiver">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-card px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={() => setOpen(false)} className="text-sm font-medium">Home</Link>
            <Link to="/find-caregiver" onClick={() => setOpen(false)} className="text-sm font-medium">Find a Caregiver</Link>
            <Link to="/caregiver-portal" onClick={() => setOpen(false)} className="text-sm font-medium">For Caregivers</Link>
            <Link to="/admin" onClick={() => setOpen(false)} className="text-sm font-medium">Dashboard</Link>
            <Button className="gradient-primary border-0 text-primary-foreground w-full" asChild>
              <Link to="/find-caregiver" onClick={() => setOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
