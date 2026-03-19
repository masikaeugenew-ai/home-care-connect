import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/find-caregiver", label: "Find a Caregiver" },
  { to: "/caregiver-portal", label: "Caregiver Portal" },
  { to: "/provider-portal", label: "Provider / Payer Portal" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="gradient-primary rounded-lg p-2">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-display text-foreground">
            Home<span className="text-accent">Care</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" asChild>
            <Link to="/find-caregiver">Log In</Link>
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-0" asChild>
            <Link to="/find-caregiver">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-card px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm font-medium">
                {l.label}
              </Link>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full" asChild>
              <Link to="/find-caregiver" onClick={() => setOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
