import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}

export function SectionWrapper({ id, className = "", children, delay = 0 }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-20 md:py-32 scroll-mt-20 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
