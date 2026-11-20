"use client";

import { type ReactNode } from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const variants: Record<"rise" | "fade" | "clip" | "slide", Variants> = {
  rise: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  clip: {
    hidden: { opacity: 0, y: 32, clipPath: "inset(12% 0 0 0)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" },
  },
  slide: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "li";
  variant?: keyof typeof variants;
  delay?: number;
  amount?: number;
  once?: boolean;
};

export function ScrollReveal({
  children,
  className,
  as = "div",
  variant = "rise",
  delay = 0,
  amount = 0.25,
  once = true,
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.75, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
  stagger?: number;
  amount?: number;
};

export function ScrollStagger({
  children,
  className,
  as = "div",
  stagger = 0.08,
  amount = 0.2,
}: StaggerProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -6% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.06 },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function ScrollItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants.rise}
      transition={{ duration: 0.65, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
