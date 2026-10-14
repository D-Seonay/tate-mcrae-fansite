"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Décalage d'apparition pour mettre en cascade plusieurs éléments. */
  delay?: number;
  /** Distance de translation initiale (px). */
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "ul";
};

/**
 * Révèle son contenu au scroll (fade + translation), une seule fois.
 * Respecte prefers-reduced-motion : apparition immédiate, sans mouvement.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
