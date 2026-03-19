import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="gradient-hero text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-lg bg-primary-foreground/20 p-2">
              <Heart className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold font-display">Home<span className="text-accent">Care</span></span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Kenya's most trusted platform connecting families with verified, compassionate caregivers across 47 counties.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold font-display">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/find-caregiver" className="hover:text-primary-foreground transition-colors">Find a Caregiver</Link>
            <Link to="/caregiver-portal" className="hover:text-primary-foreground transition-colors">Caregiver Portal</Link>
            <Link to="/provider-portal" className="hover:text-primary-foreground transition-colors">Provider / Payer Portal</Link>
            <Link to="/admin" className="hover:text-primary-foreground transition-colors">Admin Dashboard</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold font-display">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <span>Elderly Care</span>
            <span>Private Home Care</span>
            <span>Post-Surgery Care</span>
            <span>Heart-Failure Care</span>
            <span>Respite Care</span>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold font-display">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+254 700 123 456</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>hello@homecare.co.ke</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/50">
        © 2026 HomeCare Kenya. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
