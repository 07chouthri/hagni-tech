import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

const ParallaxImage = ({ src, alt, className = "", speed = 0.3 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-60 * speed, 60 * speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-[120%] object-cover -mt-[10%]"
        loading="lazy"
      />
    </div>
  );
};

export default ParallaxImage;
