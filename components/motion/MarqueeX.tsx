"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

type MarqueeXProps = {
  items: string[];
  speed?: number;
  className?: string;
};

export function MarqueeX({ items, speed = 30, className }: MarqueeXProps) {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden whitespace-nowrap select-none ${className ?? ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden="true"
    >
      <motion.div
        className="inline-flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          ...(paused ? { playState: "paused" } : {}),
        }}
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm font-medium text-fg-muted uppercase"
            style={{ letterSpacing: "0.06em" }}
          >
            {item}
            <span className="mx-4 text-accent opacity-50">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
