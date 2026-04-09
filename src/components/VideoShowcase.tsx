import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Play } from "lucide-react";
import { useState } from "react";
import techAbstract from "@/assets/tech-abstract.jpg";

const VideoShowcase = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(28,95%,52%) 0%, transparent 60%)" }} />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12" variant="blur">
          <span className="section-label">See Us in Action</span>
          <h2 className="section-title text-hero-foreground mb-4">Watch How We Transform Businesses</h2>
          <p className="text-hero-foreground/50 max-w-2xl mx-auto text-base leading-relaxed">
            Discover our approach to building enterprise-grade solutions that drive real business outcomes.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} variant="scale">
          <div className="relative max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-2xl overflow-hidden border border-hero-foreground/10 shadow-2xl shadow-accent/10 group cursor-pointer"
              onClick={() => setPlaying(!playing)}
            >
              {!playing ? (
                <>
                  <img
                    src={techAbstract}
                    alt="Hagni Technologies overview"
                    className="w-full aspect-video object-cover"
                    width={1920}
                    height={1080}
                  />
                  <div className="absolute inset-0 bg-hero-bg/40 flex items-center justify-center group-hover:bg-hero-bg/30 transition-colors">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 rounded-full gradient-flame flex items-center justify-center shadow-2xl shadow-accent/40"
                    >
                      <Play size={32} className="text-accent-foreground ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-8 left-8 bg-card/90 backdrop-blur-sm rounded-xl px-5 py-3 border border-border/50 shadow-lg hidden md:block"
                  >
                    <p className="text-xs font-bold">120+ Projects</p>
                    <p className="text-[10px] text-muted-foreground">Delivered Successfully</p>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute top-8 right-8 bg-card/90 backdrop-blur-sm rounded-xl px-5 py-3 border border-border/50 shadow-lg hidden md:block"
                  >
                    <p className="text-xs font-bold gradient-flame-text">97% Retention</p>
                    <p className="text-[10px] text-muted-foreground">Client Satisfaction</p>
                  </motion.div>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                  title="Hagni Technologies Overview"
                  className="w-full aspect-video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VideoShowcase;
