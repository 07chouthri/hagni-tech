import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "blur" | "slideUp";

const variants = {
  fadeUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  fadeDown: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  fadeLeft: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
  blur: { hidden: { opacity: 0, filter: "blur(10px)" }, visible: { opacity: 1, filter: "blur(0px)" } },
  slideUp: { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } },
};

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  duration?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0, variant = "fadeUp", duration = 0.6 }: Props) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={variants[variant]}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;

/* Stagger container for child animations */
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
