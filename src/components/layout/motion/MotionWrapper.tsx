"use client";

import { LayoutProps } from "@/types/interface";
import { motion } from "framer-motion";

export default function MotionWrapper({ children }: LayoutProps) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -500 }}
    >
      {children}
    </motion.section>
  );
}
