import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection, { staggerContainer, staggerItem } from "@/components/AnimatedSection";
import {
  ArrowRight, ChevronRight, Globe, Cloud, GraduationCap, Shield, Zap,
  Eye, Server, HeartHandshake, Building2, Heart, ShoppingCart, Factory,
  BookOpen, Home, Truck, Briefcase, Quote, CheckCircle, Sparkles,
  Megaphone, Bot
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import ImageShowcase from "@/components/ImageShowcase";
import ParallaxImage from "@/components/ParallaxImage";
import heroTechTeam from "@/assets/hero-tech-team.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import industriesVisual from "@/assets/industries-visual.jpg";
import webMobileDev from "@/assets/web-mobile-dev.jpg";
import cloudInfra from "@/assets/cloud-infrastructure.jpg";
import learningPlatform from "@/assets/learning-platform.jpg";

/* ─── Counter Hook ─── */
function useCounter(end: number, duration = 2000, suffix = "") {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);
  return { ref, display: `${count}${suffix}` };
}

/* ─────────────────── HERO ─────────────────── */
const HeroSection = () => (
  <section className="section-dark relative overflow-hidden min-h-[90vh] flex items-center">
    <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 80% 40%, hsl(28,95%,52%) 0%, transparent 55%)" }} />
    <div className="absolute inset-0 dot-pattern-dark" />
    <FloatingElements />

    <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <AnimatedSection variant="fadeLeft">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-hero-foreground/10 bg-hero-foreground/5 mb-6"
            >
              <Sparkles size={14} className="text-accent" />
              <span className="text-xs font-medium text-hero-foreground/70 tracking-wide">Your Digital Transformation Partner</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-hero-foreground mb-6">
              Engineering Digital Solutions That Drive{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="gradient-flame-text inline-block"
              >
                Enterprise Growth
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base md:text-lg text-hero-foreground/60 mb-10 leading-relaxed max-w-xl"
            >
              Hagni Technologies partners with mid-size and enterprise businesses to build scalable web & mobile applications, modernize cloud infrastructure, and accelerate digital transformation — end to end.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/services">
                <Button size="lg" className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 px-7 text-sm shadow-lg shadow-accent/20">
                  Explore Our Services <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-hero-foreground/20 text-hero-foreground bg-transparent hover:bg-hero-foreground/5 gap-2 h-12 px-7 text-sm">
                  Schedule a Consultation <ChevronRight size={16} />
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} variant="fadeRight" className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 gradient-flame opacity-10 blur-3xl rounded-3xl" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={heroTechTeam}
                alt="Hagni Technologies enterprise team at work"
                width={1920}
                height={1080}
                className="relative rounded-2xl border border-hero-foreground/10 shadow-2xl"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-sm rounded-xl px-5 py-3 border border-border/50 shadow-xl"
            >
              <p className="text-2xl font-extrabold gradient-flame-text">120+</p>
              <p className="text-[10px] text-muted-foreground font-medium">Projects Delivered</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute -top-4 -right-4 bg-card/95 backdrop-blur-sm rounded-xl px-5 py-3 border border-border/50 shadow-xl"
            >
              <p className="text-2xl font-extrabold gradient-flame-text">97%</p>
              <p className="text-[10px] text-muted-foreground font-medium">Client Retention</p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ─────────────────── WHO WE ARE ─────────────────── */
const WhoWeAreSection = () => (
  <section className="py-20 lg:py-28 dot-pattern relative overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection variant="fadeLeft">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title mb-6">We Build Technology That Works for Your Business</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-[0.95rem]">
            <p>At Hagni Technologies, we are a full-service digital engineering company committed to delivering high-impact technology solutions for enterprises that demand performance, reliability, and scale.</p>
            <p>From custom software development to cloud infrastructure, digital marketing, AI solutions, and professional teaching programs — we bring the expertise, process, and precision your business needs to stay ahead in a rapidly evolving digital landscape.</p>
            <p>Our Hagni Ignite Learning's programs empower teams with industry-aligned training in development, cloud computing, digital marketing, AI/ML, and leadership — building the future-ready workforce your organization needs.</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/about">
              <Button variant="outline" className="gap-2 h-11 px-6 text-sm font-semibold">Learn More About Us <ArrowRight size={14} /></Button>
            </Link>
            <Link to="/services#teaching">
              <Button className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-11 px-6 text-sm">Explore Teaching <BookOpen size={14} /></Button>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} variant="fadeRight">
          <div className="relative">
            <ParallaxImage src={teamMeeting} alt="Hagni team collaboration" className="rounded-2xl border border-border/60 shadow-xl aspect-[4/3]" />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-4 bg-card/95 backdrop-blur-sm rounded-xl p-5 border border-border/50 shadow-xl"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "120+", label: "Projects" },
                  { num: "97%", label: "Retention" },
                  { num: "50+", label: "Experts" },
                  { num: "85+", label: "Clients" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-lg font-extrabold gradient-flame-text">{s.num}</p>
                    <p className="text-[9px] text-muted-foreground font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ─────────────────── CORE SERVICES ─────────────────── */
const services = [
  { icon: Globe, title: "Web & Mobile Application Development", desc: "We design and develop enterprise-grade web platforms and mobile applications that are fast, secure, and built to scale.", image: webMobileDev, cta: "Explore Web & Mobile", path: "/services#web-mobile" },
  { icon: Cloud, title: "Cloud & DevOps Services", desc: "We architect, migrate, and manage cloud infrastructure that reduces costs, improves uptime, and accelerates deployment.", image: cloudInfra, cta: "Explore Cloud & DevOps", path: "/services#cloud-devops" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven digital marketing strategies including SEO, SEM, social media, and content marketing to grow your brand.", image: learningPlatform, cta: "Explore Digital Marketing", path: "/services#digital-marketing" },
  { icon: Bot, title: "AI Solutions", desc: "Intelligent automation, predictive analytics, NLP, and machine learning solutions that transform business operations.", image: heroTechTeam, cta: "Explore AI Solutions", path: "/services#ai-solutions" },
  { icon: BookOpen, title: "Teaching & Training", desc: "Hagni Ignite Learning's professional training programs in development, cloud, marketing, AI, and leadership.", image: teamMeeting, cta: "Explore Teaching", path: "/services#teaching" },
];

const CoreServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 bg-secondary/60 relative overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      <AnimatedSection className="text-center mb-16" variant="blur">
        <span className="section-label">What We Do</span>
        <h2 className="section-title mb-4">Our Core Services</h2>
        <p className="section-subtitle">Everything your enterprise needs to build, scale, and succeed — under one roof.</p>
      </AnimatedSection>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {services.map((s, i) => (
          <motion.div key={i} variants={staggerItem}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="card-professional overflow-hidden h-full flex flex-col group"
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl gradient-flame flex items-center justify-center shadow-lg shadow-accent/20">
                  <s.icon size={22} className="text-accent-foreground" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-3 leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <Link to={s.path} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all">
                  {s.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─────────────────── WHY HAGNI (5 services) ─────────────────── */
const whyItems = [
  { icon: Globe, title: "Web & Mobile Development", desc: "Enterprise-grade web platforms and cross-platform mobile applications" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Modern cloud infrastructure, CI/CD, and container orchestration" },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, SEM, social media, content marketing, and brand growth strategies" },
  { icon: Bot, title: "AI Solutions", desc: "Machine learning, NLP, predictive analytics, and intelligent automation" },
  { icon: BookOpen, title: "Teaching & Training", desc: "Hagni Ignite Learning's programs for upskilling and professional development" },
];

const WhyHagniSection = () => (
  <section className="py-20 lg:py-28 dot-pattern relative">
    <div className="container mx-auto px-4 lg:px-8">
      <AnimatedSection className="text-center mb-16" variant="blur">
        <span className="section-label">Why Us</span>
        <h2 className="section-title mb-4">Why Enterprises Choose Hagni Technologies</h2>
        <p className="section-subtitle">Five core service pillars that cover every dimension of your digital journey.</p>
      </AnimatedSection>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {whyItems.map((item, i) => (
          <motion.div key={i} variants={staggerItem}>
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 20px 40px -12px hsl(28 95% 52% / 0.15)" }}
              className="card-professional p-6 flex gap-4"
            >
              <div className="shrink-0 w-11 h-11 rounded-lg gradient-flame flex items-center justify-center shadow-sm shadow-accent/15">
                <item.icon size={20} className="text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-10">
        <Link to="/services">
          <Button className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 px-8 text-sm shadow-lg shadow-accent/20">
            Explore All Services <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

/* ─────────────────── PROCESS (starts with Teaching) ─────────────────── */
const steps = [
  { title: "Teaching & Skill Assessment", desc: "We begin by understanding your team's current capabilities and training needs" },
  { title: "Discovery & Requirement Analysis", desc: "Deep dive into your business objectives and technical landscape" },
  { title: "Strategy & Architecture Planning", desc: "Blueprint the optimal solution architecture for your needs" },
  { title: "Design & Development", desc: "Craft and build using agile sprints with continuous feedback" },
  { title: "Testing & Quality Assurance", desc: "Rigorous testing to ensure reliability, security, and performance" },
  { title: "Deployment & Continuous Support", desc: "Launch with confidence and ongoing optimization" },
];

const ProcessSection = () => (
  <section className="py-20 lg:py-28 section-dark dot-pattern-dark relative overflow-hidden">
    <FloatingElements />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <AnimatedSection className="text-center mb-16" variant="blur">
        <span className="section-label">Our Process</span>
        <h2 className="section-title text-hero-foreground mb-4">How We Work</h2>
        <p className="text-base md:text-lg text-hero-foreground/50 max-w-2xl mx-auto">A structured, outcome-driven process that eliminates guesswork and delivers results.</p>
      </AnimatedSection>
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {steps.map((step, i) => (
          <AnimatedSection key={i} delay={i * 0.1} variant="fadeLeft" className="flex gap-6 mb-8 last:mb-0 w-full max-w-xl">
            <div className="flex flex-col items-center">
              <motion.div
                whileInView={{ scale: [0, 1.2, 1], rotate: [0, 10, 0] }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="w-12 h-12 rounded-full gradient-flame flex items-center justify-center text-accent-foreground font-bold text-base shadow-lg shadow-accent/20 shrink-0"
              >
                {i + 1}
              </motion.div>
              {i < steps.length - 1 && <div className="w-px h-full bg-gradient-to-b from-accent/30 to-transparent mt-2" />}
            </div>
            <div className="pb-8">
              <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-1">Step {i + 1}</p>
              <h4 className="text-base font-bold text-hero-foreground mb-1">{step.title}</h4>
              <p className="text-sm text-hero-foreground/50">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/contact">
          <Button size="lg" className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 px-7 text-sm shadow-lg shadow-accent/20">
            Start Your Project <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

/* ─────────────────── METRICS ─────────────────── */
const MetricsSection = () => {
  const m1 = useCounter(120, 2000, "+");
  const m2 = useCounter(85, 2000, "+");
  const m3 = useCounter(97, 2000, "%");
  const m4 = useCounter(50, 2000, "+");
  const metrics = [
    { ...m1, label: "Enterprise Projects Delivered" },
    { ...m2, label: "Happy Clients" },
    { ...m3, label: "Client Retention Rate" },
    { ...m4, label: "Team Members" },
  ];

  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-14" variant="blur">
          <span className="section-label">Impact</span>
          <h2 className="section-title">Delivering Results That Matter</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              ref={m.ref}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="card-professional p-8 text-center"
            >
              <p className="text-4xl md:text-5xl font-extrabold gradient-flame-text mb-2">{m.display}</p>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────── TESTIMONIALS ─────────────────── */
const testimonials = [
  { text: "Hagni Technologies transformed the way we manage our operations. Their team delivered a robust enterprise platform that exceeded our expectations.", name: "Client A", role: "CTO, Enterprise Corp" },
  { text: "Their cloud migration expertise saved us significant infrastructure costs while dramatically improving our system reliability.", name: "Client B", role: "VP Engineering, Tech Co" },
  { text: "Working with Hagni Technologies felt like having an in-house tech team. The communication and delivery were outstanding.", name: "Client C", role: "Founder, StartUp Inc" },
];

const TestimonialsSection = () => (
  <section className="py-20 lg:py-28 bg-secondary/60">
    <div className="container mx-auto px-4 lg:px-8">
      <AnimatedSection className="text-center mb-16" variant="blur">
        <span className="section-label">Testimonials</span>
        <h2 className="section-title">What Our Clients Say</h2>
      </AnimatedSection>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 lg:gap-8"
      >
        {testimonials.map((t, i) => (
          <motion.div key={i} variants={staggerItem}>
            <motion.div
              whileHover={{ y: -6 }}
              className="card-professional p-8 h-full flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <Quote size={20} className="text-accent" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">"{t.text}"</p>
              <div className="mt-6 pt-5 border-t border-border/60">
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─────────────────── INDUSTRIES ─────────────────── */
const industries = [
  { icon: Building2, label: "Banking & Financial Services" },
  { icon: Heart, label: "Healthcare & MedTech" },
  { icon: ShoppingCart, label: "Retail & E-Commerce" },
  { icon: Factory, label: "Manufacturing & Supply Chain" },
  { icon: BookOpen, label: "Education & EdTech" },
  { icon: Home, label: "Real Estate & PropTech" },
  { icon: Truck, label: "Logistics & Transportation" },
  { icon: Briefcase, label: "Professional Services" },
];

const IndustriesSection = () => (
  <section className="py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={industriesVisual} alt="" className="w-full h-full object-cover opacity-10" />
    </div>
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <AnimatedSection className="text-center mb-16" variant="blur">
        <span className="section-label">Industries</span>
        <h2 className="section-title">Industries We Serve</h2>
      </AnimatedSection>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-5"
      >
        {industries.map((ind, i) => (
          <motion.div key={i} variants={staggerItem}>
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="card-professional flex flex-col items-center gap-3 p-6 text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <ind.icon size={24} className="text-accent" />
              </div>
              <p className="text-xs font-semibold leading-tight">{ind.label}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-10">
        <Link to="/contact">
          <Button variant="outline" className="gap-2 h-11 px-6 text-sm font-semibold">
            Discuss Your Industry <ArrowRight size={14} />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

/* ─────────────────── FINAL CTA ─────────────────── */
const FinalCTASection = () => (
  <section className="py-20 lg:py-28 section-dark dot-pattern-dark relative overflow-hidden">
    <div className="absolute inset-0 opacity-15" style={{ background: "radial-gradient(ellipse at 50% 100%, hsl(28,95%,52%) 0%, transparent 60%)" }} />
    <FloatingElements />
    <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
      <AnimatedSection variant="scale">
        <span className="section-label">Get Started</span>
        <h2 className="section-title text-hero-foreground mb-6">Ready to Build Something That Lasts?</h2>
        <p className="text-base md:text-lg text-hero-foreground/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're modernizing legacy systems, launching a new digital product, or scaling your cloud infrastructure — Hagni Technologies is the partner built for the challenge.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 px-7 text-sm shadow-lg shadow-accent/20">
              Schedule a Free Consultation <ArrowRight size={16} />
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-hero-foreground/20 text-hero-foreground bg-transparent hover:bg-hero-foreground/5 h-12 px-7 text-sm">
              View Our Services
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─────────────────── PAGE ─────────────────── */
const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <WhoWeAreSection />
      <CoreServicesSection />
      <WhyHagniSection />
      <ImageShowcase />
      <ProcessSection />
      <MetricsSection />
      <TestimonialsSection />
      <IndustriesSection />
      <FinalCTASection />
    </main>
    <Footer />
  </>
);

export default Index;
