import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import showcaseEnterprise from "@/assets/showcase-enterprise.jpg";

const ImageShowcase = () => (
  <section className="py-16 lg:py-24 section-dark relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(28,95%,52%) 0%, transparent 60%)" }} />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <AnimatedSection className="text-center mb-10" variant="blur">
        <span className="section-label">See Us in Action</span>
        <h2 className="section-title text-hero-foreground mb-3">Powering Enterprise Innovation</h2>
        <p className="text-hero-foreground/50 max-w-2xl mx-auto text-base leading-relaxed">
          Our teams deliver cutting-edge solutions across cloud, mobile, and enterprise platforms.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} variant="scale">
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl overflow-hidden border border-hero-foreground/10 shadow-2xl shadow-accent/10"
          >
            <img
              src={showcaseEnterprise}
              alt="Hagni Technologies enterprise team working on digital solutions"
              className="w-full aspect-video object-cover"
              width={1920}
              height={1080}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/60 via-transparent to-transparent" />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-xl px-5 py-3 border border-border/50 shadow-lg hidden md:block"
            >
              <p className="text-xs font-bold">120+ Projects</p>
              <p className="text-[10px] text-muted-foreground">Delivered Successfully</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm rounded-xl px-5 py-3 border border-border/50 shadow-lg hidden md:block"
            >
              <p className="text-xs font-bold gradient-flame-text">97% Retention</p>
              <p className="text-[10px] text-muted-foreground">Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ImageShowcase;
