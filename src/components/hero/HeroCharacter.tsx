"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

function useCombinedY(a: MotionValue<number>, b: MotionValue<number>) {
  return useTransform([a, b], ([va, vb]) => Number(va) + Number(vb));
}

export function HeroCharacter({ src }: { src: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.7 });
  const sy = useSpring(my, { stiffness: 90, damping: 18, mass: 0.7 });

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [16, -36]);
  const parallaxX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const parallaxY = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const combinedY = useCombinedY(parallaxY, scrollY);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-4, 4]);

  const onMove = useCallback(
    (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(Math.max(-0.5, Math.min(0.5, x)));
      my.set(Math.max(-0.5, Math.min(0.5, y)));
    },
    [mx, my],
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [onMove]);

  return (
    <div ref={wrapRef} className="hero-character relative h-full w-full select-none">
      <motion.div
        className="absolute inset-0 flex items-end justify-center md:justify-end"
        style={{ x: parallaxX, y: combinedY, rotateY, transformPerspective: 1200 }}
        initial={{ opacity: 0, scale: 0.94, y: 40 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <div className="relative h-[min(88vh,820px)] w-auto max-w-[min(100%,520px)]">
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(162,51,182,0.3),transparent_65%)] blur-2xl" />
          <motion.div
            className="relative h-full motion-safe:animate-breathe"
            style={{ transformOrigin: "50% 100%" }}
          >
            <Image
              src={src}
              alt="Leonida original character — Vice City night house"
              width={832}
              height={1248}
              priority
              className="relative h-full w-auto object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
              sizes="(max-width: 768px) 90vw, 42vw"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
