"use client";

import { useIntro } from "@/app/context/intro-context";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function HeroReveal() {
  const { revealId } = useIntro();
  const title = useAnimationControls();

  useEffect(() => {
    let mounted = true;

    async function run() {
      title.set({
        scaleY: 0,
        opacity: 0,
      });

      await title.start({
        scaleY: 1,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        },
      });

      if (!mounted) return;
    }

    run();
    return () => {
      mounted = false;
    };
  }, [revealId, title]);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Texto centrado */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          animate={title}
          className="origin-center"
          style={{ perspective: "1000px" }}
        >
          <h1 className="select-none font-neue uppercase tracking-[-0.03em] leading-[0.9] text-brown whitespace-nowrap">
            <span className="block text-[30vw] sm:text-[28vw] lg:text-[320px]">
              Perymyan
            </span>
            <span className="block text-[35vw] sm:text-[31vw] lg:text-[360px]">
              Studio
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
