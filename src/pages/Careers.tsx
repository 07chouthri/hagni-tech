import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowRight, Sparkles, MapPin, Clock, Briefcase, Code, Cloud,
  Shield, BarChart3, Smartphone, Users, GraduationCap, Heart,
  Coffee, Laptop, Globe, Send, Building2, BookOpen, ExternalLink
} from "lucide-react";
import SEOHead from "@/components/SEOHead";

const openPositions = [
  { title: "Senior Full-Stack Developer", department: "Engineering", location: "Bangalore, India", type: "Full-Time", experience: "4-7 years", icon: Code, skills: ["React", "Node.js", "TypeScript", "PostgreSQL"] },
  { title: "Cloud Solutions Architect", department: "Cloud & DevOps", location: "Remote", type: "Full-Time", experience: "5-8 years", icon: Cloud, skills: ["AWS", "Terraform", "Kubernetes", "CI/CD"] },
  { title: "Mobile App Developer", department: "Engineering", location: "Hyderabad, India", type: "Full-Time", experience: "3-5 years", icon: Smartphone, skills: ["React Native", "Flutter", "Firebase", "REST APIs"] },
  { title: "DevOps Engineer", department: "Cloud & DevOps", location: "Remote", type: "Full-Time", experience: "3-6 years", icon: Shield, skills: ["Docker", "Jenkins", "AWS", "Linux"] },
  { title: "UI/UX Designer", department: "Design", location: "Bangalore, India", type: "Full-Time", experience: "2-5 years", icon: BarChart3, skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems"] },
  { title: "Technical Trainer", department: "Hagni's Ignite Program", location: "Hybrid", type: "Full-Time", experience: "3-6 years", icon: GraduationCap, skills: ["Java/Python", "Curriculum Design", "Public Speaking"] },
];

const perks = [
  { icon: Laptop, title: "Remote Flexibility", desc: "Work from anywhere with hybrid options" },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical coverage for you & family" },
  { icon: GraduationCap, title: "Learning Budget", desc: "Annual upskilling allowance & certifications" },
  { icon: Coffee, title: "Great Culture", desc: "Collaborative, inclusive, innovation-driven team" },
  { icon: Users, title: "Team Events", desc: "Regular offsites, hackathons & celebrations" },
  { icon: Globe, title: "Global Exposure", desc: "Work with clients across multiple geographies" },
];

/* ─── HERO ─── */
const HeroSection = () => (
  <section className="section-dark relative overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 40% 40%, hsl(28,95%,52%) 0%, transparent 55%)" }} />
    <div className="absolute inset-0 dot-pattern-dark" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-16 lg:pt-40 lg:pb-24 text-center">
      <AnimatedSection>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-hero-foreground/10 bg-hero-foreground/5 mb-6">
          <Sparkles size={14} className="text-accent" />
          <span className="text-xs font-medium text-hero-foreground/70 tracking-wide">Join Our Team</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-hero-foreground mb-6 max-w-4xl mx-auto">
          Build Your Career at{" "}
          <span className="gradient-flame-text">Hagni Technologies</span>
        </h1>
        <p className="text-base md:text-lg text-hero-foreground/60 max-w-2xl mx-auto leading-relaxed">
          Join a team of passionate engineers, designers, and innovators shaping the future of enterprise technology.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── PERKS ─── */
const PerksSection = () => (
  <section className="py-20 lg:py-28 bg-secondary/60">
    <div className="container mx-auto px-4 lg:px-8">
      <AnimatedSection className="text-center mb-14">
        <span className="section-label">Why Join Us</span>
        <h2 className="section-title mb-4">Life at Hagni Technologies</h2>
        <p className="section-subtitle">We invest in our people because great technology starts with great teams.</p>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {perks.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="card-professional p-6 flex gap-4 group">
              <div className="shrink-0 w-11 h-11 rounded-lg gradient-flame flex items-center justify-center shadow-sm shadow-accent/15">
                <p.icon size={20} className="text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">{p.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);


/* ─── OPEN POSITIONS ─── */
const OpenPositions = () => {
  const [filter, setFilter] = useState("All");
  const departments = ["All", ...new Set(openPositions.map(p => p.department))];
  const filtered = filter === "All" ? openPositions : openPositions.filter(p => p.department === filter);

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label">Open Positions</span>
          <h2 className="section-title mb-4">Find Your Next Role</h2>
          <p className="section-subtitle">Explore current openings and apply to join our growing team.</p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {departments.map(d => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                filter === d
                  ? "gradient-flame text-accent-foreground shadow-lg shadow-accent/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {filtered.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="card-professional p-6 group hover:border-accent/30"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl gradient-flame flex items-center justify-center shadow-sm shadow-accent/15">
                  <job.icon size={22} className="text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold mb-1 group-hover:text-accent transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                    <span className="inline-flex items-center gap-1"><Building2 size={12} />{job.department}</span>
                    <span className="inline-flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={12} />{job.type}</span>
                    <span className="inline-flex items-center gap-1"><Briefcase size={12} />{job.experience}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.map(s => (
                      <span key={s} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-accent/10 text-accent">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── APPLICATION FORM ─── */
const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", position: "", experience: "", portfolio: "", coverLetter: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.position) {
      toast.error("Please fill all required fields.");
      return;
    }
    toast.success("Application submitted successfully! We'll get back to you soon.");
    setFormData({ fullName: "", email: "", phone: "", position: "", experience: "", portfolio: "", coverLetter: "" });
  };

  const update = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  return (
    <section id="apply" className="py-20 lg:py-28 section-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-15" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(28,95%,52%) 0%, transparent 60%)" }} />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label">Apply Now</span>
          <h2 className="section-title text-hero-foreground mb-4">Submit Your Application</h2>
          <p className="text-base text-hero-foreground/60 max-w-xl mx-auto">
            Don't see a perfect match? Send us your details and we'll reach out when the right opportunity comes up.
          </p>
        </AnimatedSection>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-semibold text-hero-foreground/70 mb-1.5 block">Full Name *</label>
              <Input value={formData.fullName} onChange={e => update("fullName", e.target.value)} placeholder="Your full name" className="bg-hero-foreground/5 border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/30 h-11" />
            </div>
            <div>
              <label className="text-xs font-semibold text-hero-foreground/70 mb-1.5 block">Email Address *</label>
              <Input type="email" value={formData.email} onChange={e => update("email", e.target.value)} placeholder="you@example.com" className="bg-hero-foreground/5 border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/30 h-11" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-semibold text-hero-foreground/70 mb-1.5 block">Phone Number</label>
              <Input value={formData.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" className="bg-hero-foreground/5 border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/30 h-11" />
            </div>
            <div>
              <label className="text-xs font-semibold text-hero-foreground/70 mb-1.5 block">Position Applying For *</label>
              <Select value={formData.position} onValueChange={v => update("position", v)}>
                <SelectTrigger className="bg-hero-foreground/5 border-hero-foreground/10 text-hero-foreground h-11">
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  {openPositions.map(p => (
                    <SelectItem key={p.title} value={p.title}>{p.title}</SelectItem>
                  ))}
                  <SelectItem value="other">Other / General Application</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-semibold text-hero-foreground/70 mb-1.5 block">Years of Experience</label>
              <Input value={formData.experience} onChange={e => update("experience", e.target.value)} placeholder="e.g., 3 years" className="bg-hero-foreground/5 border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/30 h-11" />
            </div>
            <div>
              <label className="text-xs font-semibold text-hero-foreground/70 mb-1.5 block">Portfolio / LinkedIn URL</label>
              <Input value={formData.portfolio} onChange={e => update("portfolio", e.target.value)} placeholder="https://" className="bg-hero-foreground/5 border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/30 h-11" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-hero-foreground/70 mb-1.5 block">Cover Letter / Message</label>
            <Textarea value={formData.coverLetter} onChange={e => update("coverLetter", e.target.value)} placeholder="Tell us about yourself..." rows={5} className="bg-hero-foreground/5 border-hero-foreground/10 text-hero-foreground placeholder:text-hero-foreground/30 resize-none" />
          </div>
          <div className="text-center pt-4">
            <Button type="submit" size="lg" className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 px-8 text-sm shadow-lg shadow-accent/20">
              <Send size={16} /> Submit Application
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

/* ─── PAGE ─── */
const Careers = () => (
  <div className="min-h-screen">
      <SEOHead
      title="Careers at Hagni Technologies — Join Our Team"
      description="Explore exciting career opportunities at Hagni Technologies. Join our team of innovators building cutting-edge web, mobile, cloud, and AI solutions."
      keywords="Hagni Technologies careers, tech jobs, software developer jobs, cloud engineer jobs, digital marketing jobs"
      canonical="https://hagnitechnologies.com/careers"
      jsonLd={{ "@context": "https://schema.org", "@type": "JobPosting", hiringOrganization: { "@type": "Organization", name: "Hagni Technologies" } }}
    />
    <Navbar />
    <HeroSection />
    <PerksSection />
    <OpenPositions />
    <ApplicationForm />
    <Footer />
  </div>
);

export default Careers;
