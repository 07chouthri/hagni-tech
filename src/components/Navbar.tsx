import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Cloud, GraduationCap, ChevronDown, Megaphone, Bot, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const serviceItems = [
  { icon: Globe, label: "Web & Mobile Development", desc: "Enterprise apps built for scale", path: "/services#web-mobile" },
  { icon: Cloud, label: "Cloud & DevOps", desc: "Modern infrastructure & automation", path: "/services#cloud-devops" },
  { icon: Megaphone, label: "Digital Marketing", desc: "Growth-driven marketing strategies", path: "/services#digital-marketing" },
  { icon: Bot, label: "AI Solutions", desc: "Intelligent automation & analytics", path: "/services#ai-solutions" },
  { icon: BookOpen, label: "Hagni's Ignite Program", desc: "Professional training programs", path: "/services#teaching" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services", hasDropdown: true },
  { label: "Partners", path: "/partners" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowServices(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowServices(false), 200);
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith("/#")) {
      const id = path.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between h-[4.25rem] px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Hagni Technologies" className="h-20 w-auto rounded-sm" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
              onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
              ref={link.hasDropdown ? dropdownRef : undefined}
            >
              <Link
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-[13px] font-medium px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1 ${
                  isActive(link.path)
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={12} className={`transition-transform ${showServices ? "rotate-180" : ""}`} />}
              </Link>

              {link.hasDropdown && showServices && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[420px]">
                  <div className="bg-card border border-border/60 rounded-2xl shadow-xl p-4 space-y-1">
                    {serviceItems.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg gradient-flame flex items-center justify-center shrink-0 shadow-sm shadow-accent/15">
                          <s.icon size={18} className="text-accent-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold group-hover:text-accent transition-colors">{s.label}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                        </div>
                      </Link>
                    ))}
                    <div className="border-t border-border/50 mt-2 pt-2">
                      <Link
                        to="/services"
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-accent hover:bg-secondary rounded-lg transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="ml-4">
            <Button size="sm" className="gradient-flame text-accent-foreground font-semibold border-0 h-9 px-5 text-xs shadow-sm shadow-accent/20">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground p-2 hover:bg-secondary rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.path}>
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary px-3 py-2.5 rounded-lg transition-colors"
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 space-y-1 mb-1">
                      {serviceItems.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
                        >
                          <s.icon size={14} className="text-accent" />
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary px-3 py-2.5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block pt-2">
            <Button size="sm" className="w-full gradient-flame text-accent-foreground font-semibold border-0 h-10 text-sm">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
