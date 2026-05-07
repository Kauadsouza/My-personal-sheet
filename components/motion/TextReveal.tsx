"use client";

import { createElement, useMemo } from "react";
import { motion, type Variants } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: string;
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.03,
  as = "span",
}: TextRevealProps) {
  const words = useMemo(() => text.split(" "), [text]);

  const children = words.map((word, i) => (
    <motion.span
      key={`${word}-${i}`}
      custom={delay + i * stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={wordVariants}
      style={{ display: "inline-block", marginRight: "0.25em" }}
    >
      {word}
    </motion.span>
  ));

  return createElement(as, { className, style: { display: "inline" } }, ...children);
}