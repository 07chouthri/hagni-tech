import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection, { staggerContainer, staggerItem } from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import ParallaxImage from "@/components/ParallaxImage";
import { motion } from "framer-motion";
import {
  ArrowRight, Target, Eye, Sparkles, Users, Award,
  Rocket, Heart, Code, Calendar, BookOpen, Bot, Megaphone, Globe, Cloud
} from "lucide-react";
import heroTechTeam from "@/assets/hero-tech-team.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import webMobileDev from "@/assets/web-mobile-dev.jpg";
import cloudInfra from "@/assets/cloud-infrastructure.jpg";
import learningPlatform from "@/assets/learning-platform.jpg";
import SEOHead from "@/components/SEOHead";

/* ─── HERO ─── */
const HeroSection = () => (
  <section className="section-dark relative overflow-hidden min-h-[70vh] flex items-center">
    <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 30% 60%, hsl(28,95%,52%) 0%, transparent 55%)" }} />
    <div className="absolute inset-0 dot-pattern-dark" />
    <FloatingElements />
    <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-16 lg:pt-40 lg:pb-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimatedSection variant="fadeLeft">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-hero-foreground/10 bg-hero-foreground/5 mb-6"
          >
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-medium text-hero-foreground/70 tracking-wide">About Hagni Technologies</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-hero-foreground mb-6">
            Your Trusted{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="gradient-flame-text inline-block"
            >
              Digital Transformation Partner
            </motion.span>
          </h1>
          <p className="text-base md:text-lg text-hero-foreground/60 leading-relaxed max-w-xl">
            We are a full-service digital engineering company helping businesses build a strong digital presence and equipping individuals with future-ready skills — combining technology, creativity, and strategy to deliver measurable results.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.3} variant="fadeRight" className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 gradient-flame opacity-10 blur-3xl rounded-3xl" />
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}>
              <img src={heroTechTeam} alt="Hagni Technologies team" width={1920} height={1080} className="relative rounded-2xl border border-hero-foreground/10 shadow-2xl" />
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ─── MISSION / VISION / VALUES ─── */
const missionCards = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To innovate, empower, and elevate businesses and careers through technology and knowledge — delivering solutions that create real, lasting impact.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become a trusted global leader in technology, driving digital growth for enterprises and shaping future-ready talent across industries.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Delivering innovative and reliable technology solutions. Building long-term client partnerships. Empowering talent through industry-relevant training. Driving digital transformation across industries.",
  },
];

const MissionVisionSection = () => (
  <section className="py-20 lg:py-28 bg-background dot-pattern">
    <div className="container mx-auto px-4 lg:px-8">
      <AnimatedSection className="text-center mb-14" variant="blur">
        <span className="section-label">Who We Are</span>
        <h2 className="section-title mb-4">Purpose-Driven Technology</h2>
        <p className="section-subtitle">Every solution we build is anchored in a clear mission, a bold vision, and unwavering values.</p>
      </AnimatedSection>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {missionCards.map((c) => (
          <motion.div key={c.title} variants={staggerItem}>
            <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="card-professional p-8 h-full text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-flame mb-6 shadow-md shadow-accent/20">
                <c.icon size={26} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─── COMPANY STORY WITH COLLAGE ─── */
const StorySection = () => (
  <section className="py-20 lg:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection variant="fadeLeft">
          <span className="section-label">Our Story</span>
          <h2 className="section-title mb-6">From Vision to Reality</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
            <p>Hagni Technologies was founded with a simple yet powerful belief — that every business deserves access to world-class technology, not just the ones with unlimited budgets.</p>
            <p>We started as a small team of passionate engineers and grew into a full-service digital engineering company serving enterprises across industries — spanning Digital Marketing, Website Development, Web & Mobile Application Development, Cloud Solutions, and DevOps Services.</p>
            <p>What sets us apart is our dual focus on technology services and skill development. Through our flagship initiative, Hagni's Ignite Program, we bridge the gap between education and industry by offering career-focused courses and professional skill development — all under one roof.</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/services">
              <Button className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-11 px-6 text-sm">Explore Services <ArrowRight size={14} /></Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="gap-2 h-11 px-6 text-sm font-semibold">Contact Us</Button>
            </Link>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2} variant="fadeRight">
          {/* Image Collage */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden border border-border/60 shadow-lg">
              <img src={teamMeeting} alt="Team collaboration" className="w-full h-40 object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden border border-border/60 shadow-lg mt-6">
              <img src={webMobileDev} alt="Web development" className="w-full h-40 object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden border border-border/60 shadow-lg -mt-3">
              <img src={cloudInfra} alt="Cloud infrastructure" className="w-full h-40 object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden border border-border/60 shadow-lg mt-3">
              <img src={learningPlatform} alt="Learning programs" className="w-full h-40 object-cover" />
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ─── TEACHING DETAILS ─── */
const TeachingSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimatedSection variant="fadeRight">
          <ParallaxImage src={learningPlatform} alt="Hagni Ignite Learning programs" className="rounded-2xl border border-border/60 shadow-xl aspect-[4/3]" />
        </AnimatedSection>
        <AnimatedSection variant="fadeLeft">
          <span className="section-label">Hagni's Ignite Program & Training</span>
          <h2 className="section-title mb-6">Hagni's Ignite Program</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
            <p>Our Ignite Program provides industry-aligned professional training designed to bridge skill gaps and build future-ready talent — combining instructor-led learning with hands-on projects and industry-recognized certifications.</p>
            <p>From full-stack development and cloud computing to digital marketing, AI/ML, leadership, and sales — we prepare individuals to thrive in today's competitive job market.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {[
              { icon: Code, text: "Full-Stack Development" },
              { icon: Cloud, text: "Cloud & DevOps" },
              { icon: Megaphone, text: "Digital Marketing" },
              { icon: Bot, text: "AI & Machine Learning" },
              { icon: Users, text: "Leadership & HR" },
              { icon: Globe, text: "Sales & Communication" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm">
                <item.icon size={14} className="text-accent shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <Link to="/services#teaching" className="inline-block mt-8">
            <Button className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-11 px-6 text-sm">Explore Programs <ArrowRight size={14} /></Button>
          </Link>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ─── TIMELINE / ROADMAP ─── */
const timelineItems = [
  {
    year: "2020",
    title: "Founded with Purpose",
    desc: "Hagni Technologies was established with a clear mission — to innovate, empower, and elevate businesses and careers through technology and knowledge.",
    icon: Rocket,
  },
  {
    year: "2021",
    title: "Core Services Launched",
    desc: "Rolled out our flagship services: Digital Marketing, Website Development, and Web & Mobile Application Development for startups and growing businesses.",
    icon: Code,
  },
  {
    year: "2022",
    title: "Cloud & DevOps Practice",
    desc: "Expanded our offering to include Cloud Solutions, DevOps Services, and AI & Automation Testing — becoming a true end-to-end technology partner.",
    icon: Cloud,
  },
  {
    year: "2023",
    title: "Hagni Ignite Program Launched",
    desc: "Introduced our flagship talent initiative offering career-focused courses in Full-Stack Development, Cloud, Digital Marketing, AI, and professional skill tracks.",
    icon: BookOpen,
  },
  {
    year: "2024",
    title: "Skill Development Expansion",
    desc: "Broadened the Ignite Program to include HR, Leadership, Sales, and Business Development courses — bridging the gap between education and industry at scale.",
    icon: Users,
  },
  {
    year: "2025",
    title: "Global Growth & Impact",
    desc: "Serving clients across multiple countries with 40+ professionals, partnering with enterprises to drive digital transformation and shape future-ready talent worldwide.",
    icon: Globe,
  },
];

const TimelineSection = () => (
  <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
    <FloatingElements />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <AnimatedSection className="text-center mb-16" variant="blur">
        <span className="section-label">Our Journey</span>
        <h2 className="section-title mb-4">Company Roadmap</h2>
        <p className="section-subtitle">From a bold idea to a global technology partner — here's how we got here.</p>
      </AnimatedSection>

      <div className="relative max-w-2xl mx-auto">
        {/* Vertical connecting line */}
        <div className="absolute left-[1.875rem] top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/30 to-transparent" />

        {timelineItems.map((item, i) => (
          <AnimatedSection key={item.year} delay={i * 0.1} variant="fadeLeft">
            <div className="relative flex items-start gap-6 mb-8 last:mb-0">

              {/* Icon node anchored on the line */}
              <div className="relative shrink-0 flex flex-col items-center z-10">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.15 }}
                  className="w-[3.75rem] flex flex-col items-center gap-1"
                >
                  <div className="w-10 h-10 rounded-full gradient-flame flex items-center justify-center shadow-md shadow-accent/25 ring-4 ring-background">
                    <item.icon size={16} className="text-accent-foreground" />
                  </div>
                  <span className="text-[10px] font-extrabold text-accent tracking-widest">{item.year}</span>
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card-professional p-6 w-full mt-1"
              >
                <h3 className="text-base font-bold mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CTA ─── */
const CTASection = () => (
  <section className="section-dark relative overflow-hidden py-20 lg:py-28">
    <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(28,95%,52%) 0%, transparent 60%)" }} />
    <FloatingElements />
    <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
      <AnimatedSection variant="scale">
        <h2 className="text-3xl md:text-4xl font-extrabold text-hero-foreground mb-4">Ready to Work With Us?</h2>
        <p className="text-hero-foreground/60 max-w-xl mx-auto mb-8 leading-relaxed">Let's discuss how Hagni Technologies can help your business achieve its digital goals.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 px-7 text-sm shadow-lg shadow-accent/20">
              Get in Touch <ArrowRight size={16} />
            </Button>
          </Link>
          <Link to="/partners">
            <Button size="lg" variant="outline" className="border-hero-foreground/20 text-hero-foreground bg-transparent hover:bg-hero-foreground/5 gap-2 h-12 px-7 text-sm">
              Partner With Us
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── PAGE ─── */
const About = () => (
  <div className="min-h-screen">
      <SEOHead
      title="About Hagni Technologies — Our Mission, Vision & Team"
      description="Learn about Hagni Technologies' mission to accelerate digital transformation. Discover our values, team, and commitment to delivering world-class technology solutions."
      keywords="about Hagni Technologies, digital transformation company, IT company, technology partner, software development team"
      canonical="https://hagnitechnologies.com/about"
      jsonLd={{ "@context": "https://schema.org", "@type": "AboutPage", name: "About Hagni Technologies", description: "Our mission, vision and values." }}
    />
    <Navbar />
    <HeroSection />
    <MissionVisionSection />
    <StorySection />
    <TeachingSection />
    <TimelineSection />
    <CTASection />
    <Footer />
  </div>
);

export default About;