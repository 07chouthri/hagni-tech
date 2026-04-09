import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="section-dark border-t border-hero-foreground/5">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Hagni Technologies" className="h-20 w-auto rounded-sm" />
          <p className="text-sm text-hero-foreground/50 leading-relaxed">
            Your Digital Transformation Partner. Building scalable technology solutions for enterprises worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-hero-foreground/80 mb-4 uppercase tracking-[0.15em]">Company</h4>
          <ul className="space-y-2.5">
            {[{ label: "Home", to: "/" }, { label: "About Us", to: "/about" }, { label: "Careers", to: "/careers" }, { label: "Partners", to: "/partners" }, { label: "Contact", to: "/contact" }].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-hero-foreground/40 hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-hero-foreground/80 mb-4 uppercase tracking-[0.15em]">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: "Web & Mobile Development", to: "/services" },
              { label: "Cloud & DevOps", to: "/services" },
              { label: "Hagni Ignite Learning", to: "/services" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-hero-foreground/40 hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-hero-foreground/80 mb-4 uppercase tracking-[0.15em]">Connect</h4>
          <p className="text-sm text-hero-foreground/40 mb-1">hagnitechnologies2026@gmail.com</p>
          <p className="text-sm text-hero-foreground/40 mb-5">+91 89256 47123</p>
          <div className="flex gap-2">
            {[Linkedin, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-md bg-hero-foreground/5 flex items-center justify-center text-hero-foreground/30 hover:text-accent hover:bg-accent/10 transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-hero-foreground/5 mt-12 pt-8 text-center">
        <p className="text-xs text-hero-foreground/30">© {new Date().getFullYear()} Hagni Technologies. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
