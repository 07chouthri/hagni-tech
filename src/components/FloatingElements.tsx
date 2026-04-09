import { motion } from "framer-motion";

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating circles */}
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-accent/5 blur-2xl"
    />
    <motion.div
      animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-[20%] left-[5%] w-48 h-48 rounded-full bg-primary/5 blur-2xl"
    />
    <motion.div
      animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute top-[50%] right-[25%] w-32 h-32 rounded-full bg-accent/3 blur-xl"
    />
    {/* Small dots */}
    {[
      { top: "12%", left: "20%", size: 6, delay: 0 },
      { top: "30%", right: "15%", size: 4, delay: 1.5 },
      { top: "65%", left: "12%", size: 5, delay: 3 },
      { top: "80%", right: "30%", size: 3, delay: 0.8 },
    ].map((dot, i) => (
      <motion.div
        key={i}
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
        className="absolute rounded-full gradient-flame"
        style={{ top: dot.top, left: dot.left, right: (dot as any).right, width: dot.size, height: dot.size }}
      />
    ))}
  </div>
);

export default FloatingElements;
