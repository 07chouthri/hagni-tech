import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";

const serviceOptions = [
  "Web & Mobile Application Development",
  "Cloud & DevOps Services",
  "Hagni Ignite Learning",
  "Partnership & Collaboration",
  "Other",
];

const hearOptions = ["Google Search", "LinkedIn", "Referral", "Social Media", "Other"];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "", hearAbout: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Enquiry Submitted", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", company: "", phone: "", service: "", message: "", hearAbout: "" });
  };

  return (
    <>
    <SEOHead
        title="Contact Hagni Technologies — Get In Touch"
        description="Contact Hagni Technologies for enterprise web, mobile, cloud, AI, and training solutions. Get a free consultation today."
        keywords="contact Hagni Technologies, IT consulting, free consultation, software development inquiry"
        canonical="https://hagnitechnologies.com/contact"
        jsonLd={{ "@context": "https://schema.org", "@type": "ContactPage", name: "Contact Hagni Technologies" }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section-dark dot-pattern-dark pt-28 pb-14 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <AnimatedSection>
              <span className="section-label">Contact Us</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-hero-foreground mb-4 tracking-tight">
                Let's Start a <span className="gradient-flame-text">Conversation</span>
              </h1>
              <p className="text-hero-foreground/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Whether you have a project in mind, a challenge to solve, or simply want to explore how we can support your business — our team is ready to listen.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Form + Details */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
              {/* Form */}
              <AnimatedSection className="lg:col-span-3">
                <div className="card-professional p-8 lg:p-10">
                  <h2 className="text-xl font-bold mb-1">Send Us Your Enquiry</h2>
                  <p className="text-sm text-muted-foreground mb-8">Fill out the form below and our team will get back to you promptly.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input placeholder="Full Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-11" />
                      <Input type="email" placeholder="Business Email *" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-11" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="h-11" />
                      <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-11" />
                    </div>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger className="h-11"><SelectValue placeholder="Service Interested In" /></SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Your Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    <Select value={form.hearAbout} onValueChange={(v) => setForm({ ...form, hearAbout: v })}>
                      <SelectTrigger className="h-11"><SelectValue placeholder="How did you hear about us?" /></SelectTrigger>
                      <SelectContent>
                        {hearOptions.map((h) => <SelectItem key={h} value={h}>{h}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Button type="submit" size="lg" className="w-full gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 shadow-md shadow-accent/20">
                      Submit Your Enquiry <Send size={16} />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">Your information is 100% confidential.</p>
                  </form>
                </div>
              </AnimatedSection>

              {/* Details */}
              <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-8">
                <div className="card-professional p-8">
                  <h3 className="font-bold text-base mb-5">Contact Details</h3>
                  <div className="space-y-5">
                    {[
                      { icon: MapPin, content: <p>Chennai, Guindy</p> },
                      { icon: Mail, content: <div className="space-y-1"><p>hagnitechnologies2026@gmail.com</p></div> },
                      { icon: Phone, content: <p>+91 89256 47123</p> },
                      { icon: Clock, content: <div><p>Monday to Friday</p><p>9 AM to 6 PM IST</p></div> },
                    ].map(({ icon: Icon, content }, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-accent" />
                        </div>
                        <div className="text-sm text-muted-foreground pt-1.5">{content}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-professional p-8">
                  <h3 className="font-bold text-base mb-5">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, label: "LinkedIn" },
                      { icon: Instagram, label: "Instagram" },
                      { icon: Twitter, label: "Twitter/X" },
                      { icon: Youtube, label: "YouTube" },
                    ].map(({ icon: Icon, label }) => (
                      <a key={label} href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors" aria-label={label}>
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
