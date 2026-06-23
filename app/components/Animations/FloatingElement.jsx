"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FloatingElement({
  children,
  className = "",
  delay = 0,
  duration = 3,
  yOffset = 20,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={
        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
      }
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -yOffset, 0] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
