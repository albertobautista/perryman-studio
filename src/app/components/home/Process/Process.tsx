"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

type Step = {
  title: string;
  body: string;
};

type ProcessProps = {
  steps: Step[];
};

function useScrollDirection() {
  const [dir, setDir] = useState<"up" | "down">("down");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setDir(y > lastY.current ? "down" : "up");
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return dir;
}

export default function Process({ steps }: ProcessProps) {
  const dir = useScrollDirection();

  return (
    <section
      className="
        relative z-30
        -mt-10 md:mt-14
        bg-white
        rounded-t-[44px] md:rounded-t-[70px]
        shadow-[0_-20px_60px_rgba(0,0,0,0.06)]
      "
    >
      {/* HEADER: OUR / PROCESS (2 filas, más grande) */}
      <div className="px-6 md:px-12 pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="uppercase font-neu tracking-tight leading-[0.88] text-black">
          <div className="flex justify-start">
            <span className="text-[22vw] md:text-[10.5vw]">OUR</span>
          </div>

          <div className="flex justify-end -mt-3 md:-mt-6">
            <span className="text-[22vw] md:text-[10.5vw]">PROCESS</span>
          </div>
        </div>
      </div>

      {/* STEPS */}
      <div className="px-6 md:px-12 pb-14 md:pb-20">
        <div className="mx-auto max-w-[900px]">
          <div className="space-y-8 md:space-y-10">
            {steps.map((s, i) => (
              <ProcessRow
                key={`${s.title}-${i}`}
                step={s}
                index={i}
                dir={dir}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessRow({
  step,
  index,
  dir,
}: {
  step: Step;
  index: number;
  dir: "up" | "down";
}) {
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();

  const variants = {
    hiddenLeft: { x: -90, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  } as const;

  return (
    <motion.div
      variants={variants}
      initial={reduceMotion ? "visible" : "hiddenLeft"}
      animate={controls}
      viewport={{ amount: 0.35, margin: "-25% 0px -25% 0px" }}
      onViewportEnter={() => {
        if (!reduceMotion) controls.start("visible");
      }}
      onViewportLeave={() => {
        if (!reduceMotion && dir === "up") controls.start("hiddenLeft");
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="grid grid-cols-12 gap-8 md:gap-10 items-center py-6 md:py-8">
        {/* número */}
        <div className="col-span-4 md:col-span-3 flex justify-center">
          <div className="bg-black text-white w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex items-center justify-center">
            <span className="font-neue font-bold text-[72px] md:text-[96px] leading-none">
              {index + 1}
            </span>
          </div>
        </div>

        {/* texto */}
        <div className="col-span-8 md:col-span-9">
          <h3 className="uppercase font-neue font-semibold tracking-tight text-black text-[26px] md:text-[34px] leading-none">
            {step.title}
          </h3>

          <p className="mt-4 md:mt-5 text-black/75 text-[14px] md:text-[16px] leading-relaxed max-w-[62ch]">
            {step.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
