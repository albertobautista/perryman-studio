"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type PreloaderProps = {
  logoSrc: string | StaticImageData;
  bgColor?: string;
  totalMs?: number;
  onComplete?: () => void;
};

export default function Preloader({
  logoSrc,
  bgColor = "#1f7f2f",
  totalMs = 3600,
  onComplete,
}: PreloaderProps) {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
      onComplete?.();
    }, totalMs + 500);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [totalMs, onComplete]);

  if (reduceMotion) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className={`fixed inset-0 z-[9999] ${bgColor}`}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ x: "-60vw", rotate: 0, opacity: 1, scale: 1 }}
              animate={{
                x: 0,
                rotate: 720,
              }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15,
              }}
            >
              <Image
                src={logoSrc}
                alt="Intro logo"
                width={150}
                height={150}
                priority
              />
            </motion.div>
          </div>

          {/* “hold” para que se quede un poco antes de subir */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.01 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
