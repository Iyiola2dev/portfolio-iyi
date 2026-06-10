"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, className }: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, ease: [0.2, 0.6, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
