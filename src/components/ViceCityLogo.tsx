"use client";

import Image from "next/image";
import { useCallback, useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function ViceCityLogo({
  size = "hero",
  className = "",
}: {
  size?: "hero" | "folio" | "nav";
  className?: string;
}) {
  const interactive = size === "hero" || size === "folio";
  const wrapRef = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const hover = useMotionValue(0);

  const springCfg = { stiffness: 160, damping: 22, mass: 0.55 };
  const sx = useSpring(mx, springCfg);
  const sy = useSpring(my, springCfg);
  const sh = useSpring(hover, { stiffness: 200, damping: 28, mass: 0.45 });

  const tilt = size === "folio" ? 5 : 8;
  const rotateX = useTransform(sy, [-0.5, 0.5], [tilt, -tilt]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-tilt - 1, tilt + 1]);
  const scale = useTransform(sh, [0, 1], [1, size === "folio" ? 1.03 : 1.04]);
  const liftY = useTransform(sh, [0, 1], [0, size === "folio" ? -2 : -4]);

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(Math.max(-0.5, Math.min(0.5, x)));
      my.set(Math.max(-0.5, Math.min(0.5, y)));
      hover.set(1);
      setLit(true);
    },
    [mx, my, hover],
  );

  const onLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
    hover.set(0);
    setLit(false);
  }, [mx, my, hover]);

  if (!interactive) {
    return (
      <div className={`relative w-[140px] ${className}`}>
        <Image
          src="/media/vice-city-vi-logo.png"
          alt="VICE CITY VI"
          width={140}
          height={85}
          className="h-auto w-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
        />
      </div>
    );
  }

  const maxW = size === "folio" ? "max-w-[260px]" : "max-w-[560px]";

  return (
    <div
      ref={wrapRef}
      className={`vice-vi-logo relative w-full cursor-pointer select-none [perspective:1200px] ${maxW} ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="vice-vi-logo__stage relative will-change-transform"
        style={{
          rotateX,
          rotateY,
          scale,
          y: liftY,
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50%",
        }}
      >
        <Image
          src="/media/vice-city-vi-logo.png"
          alt="VICE CITY VI"
          width={size === "folio" ? 260 : 560}
          height={size === "folio" ? 214 : 461}
          priority
          draggable={false}
          className={`vice-vi-logo__img relative h-auto w-full object-contain transition-[filter] duration-500 ease-out ${
            lit ? "vice-vi-logo__img--lit" : ""
          }`}
        />
      </motion.div>
    </div>
  );
}
