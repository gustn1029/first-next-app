"use client";

import { LayoutProps } from "@/types/interface";
import { motion } from "framer-motion";
import classes from './MotionList.module.css';

/** 적용하고 싶은 list ul에 variants={list} 적용 */
export function MotionList({ children }: LayoutProps) {
  const list = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.ul variants={list} initial="hidden" animate="visible" className={classes.reviewList}>
      {children}
    </motion.ul>
  );
}

/** 적용하고 싶은 list li에 variants={item} 적용 */
export function MotionListItem({ children }: LayoutProps) {
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.li variants={item} className={classes.reviewListItem}>
      <article className="p-8">{children}</article>
    </motion.li>
  );
}
