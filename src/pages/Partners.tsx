import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Cloud, Shield, BarChart3, Settings, Handshake, Megaphone, Users, GraduationCap, Quote, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const techPartners = [
  { icon: Cloud, label: "Cloud Provider Partner" },
  { icon: Settings, label: "DevOps Tool Partner" },
  { icon: Shield, label: "Security Platform Partner" },
  { icon: BarChart3, label: "Analytics Platform Partner" },
];

const bizPartners = [
  { icon: Handshake, label: "Consulting Firms" },
  { icon: Megaphone, label: "Marketing Agencies" },
  { icon: Users, label: "Staffing Partners" },
  { icon: GraduationCap, label: "Training Institutions" },
];

const benefits = [
  "Co-delivery on enterprise projects",
  "Revenue sharing on referrals",
  "Joint go-to-market opportunities",
  "Technical collaboration",
  "Brand visibility",
];

const partnerTypes = [
  "Technology Partnership",
  "Business Referral Partnership",
  "Co-Delivery Collaboration",
  "Academic Partnership",
  "Other",
];

const partnerTestimonials = [
  { text: "Partnering with Hagni Technologies allowed us to expand our service offerings and deliver more value to our mutual clients.", name: "Partner A", role: "Director, Consulting Firm" },
  { text: "The collaboration has been seamless. Their technical depth complements our business strategy perfectly.", name: "Partner B", role: "CEO, Marketing Agency" },
];

const Partners = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Partnership Enquiry Submitted", description: "Our partnerships team will reach out soon." });
    setForm({ name: "", email: "", company: "", type: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-dark dot-pattern-dark pt-28 pb-14 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <AnimatedSection>
              <span className="section-label">Partnerships</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-hero-foreground mb-4 tracking-tight">
                Partners & <span className="gradient-flame-text">Collaborators</span>
              </h1>
              <p className="text-hero-foreground/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                At Hagni Technologies, we believe the strongest digital solutions are built through strong partnerships.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Technology Partners */}
        <section className="py-20 dot-pattern">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <span className="section-label">Ecosystem</span>
              <h2 className="section-title">Technology Partners</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {techPartners.map((p, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="card-professional flex flex-col items-center gap-4 p-8 text-center group">
                    <div className="w-16 h-16 rounded-xl gradient-flame flex items-center justify-center shadow-md shadow-accent/20 group-hover:shadow-lg group-hover:shadow-accent/30 transition-shadow">
                      <p.icon size={30} className="text-accent-foreground" />
                    </div>
                    <p className="font-semibold text-sm">{p.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="py-20 bg-secondary/60">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <span className="section-label">Alliances</span>
              <h2 className="section-title">Strategic Business Partners</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {bizPartners.map((p, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="card-professional flex flex-col items-center gap-4 p-8 text-center group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <p.icon size={24} className="text-accent" />
                    </div>
                    <p className="font-semibold text-sm">{p.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section id="partner-form" className="py-20 dot-pattern">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <AnimatedSection>
                <span className="section-label">Join Us</span>
                <h2 className="section-title mb-6">Partner With Hagni Technologies</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-[0.95rem]">
                  Join our growing partner ecosystem and unlock new business opportunities through collaboration.
                </p>
                <ul className="space-y-3">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <CheckCircle size={14} className="text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="card-professional p-8 lg:p-10">
                  <h3 className="text-lg font-bold mb-1">Partnership Enquiry</h3>
                  <p className="text-sm text-muted-foreground mb-6">Tell us about your partnership interest.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input placeholder="Full Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-11" />
                    <Input type="email" placeholder="Business Email *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-11" />
                    <Input placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="h-11" />
                    <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                      <SelectTrigger className="h-11"><SelectValue placeholder="Partnership Type" /></SelectTrigger>
                      <SelectContent>
                        {partnerTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Tell us about the partnership opportunity" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    <Button type="submit" size="lg" className="w-full gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 shadow-md shadow-accent/20">
                      Submit Partnership Enquiry <Send size={16} />
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Partner Testimonials */}
        <section className="py-20 bg-secondary/60">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <span className="section-label">Feedback</span>
              <h2 className="section-title">What Our Partners Say</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {partnerTestimonials.map((t, i) => (
                <AnimatedSection key={i} delay={i * 0.12}>
                  <div className="card-professional p-8">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                      <Quote size={18} className="text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">"{t.text}"</p>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-28 section-dark dot-pattern-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-15" style={{ background: "radial-gradient(ellipse at 50% 100%, hsl(28,95%,52%) 0%, transparent 60%)" }} />
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <AnimatedSection>
              <span className="section-label">Collaborate</span>
              <h2 className="section-title text-hero-foreground mb-6">Let's Build Something Powerful Together</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#partner-form">
                  <Button size="lg" className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 px-7 text-sm shadow-lg shadow-accent/20">
                    Submit Partnership Enquiry <ArrowRight size={16} />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-hero-foreground/20 text-hero-foreground bg-transparent hover:bg-hero-foreground/5 h-12 px-7 text-sm">
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Partners;
