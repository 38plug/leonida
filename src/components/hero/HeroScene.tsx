"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";

/**
 * Single unified hero: character + car + highway as one keyed scene.
 * Optional looping video overlays the still when available.
 */
export function HeroScene({
  stillSrc,
  videoSrc,
}: {
  stillSrc: string;
  videoSrc?: string | null;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.8 });

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end start"],
  });
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const parallaxX = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const parallaxY = useTransform(sy, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(Math.max(-0.5, Math.min(0.5, x)));
      my.set(Math.max(-0.5, Math.min(0.5, y)));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !videoSrc) return;
    const play = () => {
      v.play().catch(() => undefined);
    };
    play();
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") play();
    });
  }, [videoSrc]);

  return (
    <div ref={wrapRef} className="hero-scene absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-[-4%] will-change-transform"
        style={{ x: parallaxX, y: parallaxY, scale: scrollScale }}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="absolute inset-0 motion-safe:animate-kenburns"
          style={{ y: scrollY }}
        >
          <Image
            src={stillSrc}
            alt="Leonida night house — character and purple supercar on a sunset coastal highway"
            fill
            priority
            sizes="100vw"
            className={`object-cover object-[72%_center] sm:object-[68%_center] transition-opacity duration-700 ${
              videoReady ? "opacity-0" : "opacity-100"
            }`}
          />
          {videoSrc ? (
            <video
              ref={videoRef}
              className={`absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-[68%_center] transition-opacity duration-700 ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
              src={videoSrc}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              onCanPlay={() => setVideoReady(true)}
              aria-hidden
            />
          ) : null}
        </motion.div>
      </motion.div>

      {/* Left readability wash for type */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void/85 via-void/45 to-transparent md:via-void/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent"
        aria-hidden
      />
      <div className="landing-hero-grain absolute inset-0 z-[1]" aria-hidden />
    </div>
  );
}
