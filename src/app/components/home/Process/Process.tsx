"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

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
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Transforma la posición Y del scroll a valores de translateX
  const ourTransform = useTransform(scrollY, (latest) => {
    if (ref.current) {
      const element = ref.current as HTMLElement;
      const elementTop = element.offsetTop;
      const scrollRelative = latest - elementTop;
      // De -50px (móvil) / -100px (desktop) hacia 0px (centro)
      const maxRange = window.innerWidth < 768 ? 50 : 100;
      return Math.max(Math.min(scrollRelative * 0.3, maxRange), -maxRange);
    }
    return 0;
  });

  const processTransform = useTransform(scrollY, (latest) => {
    if (ref.current) {
      const element = ref.current as HTMLElement;
      const elementTop = element.offsetTop;
      const scrollRelative = latest - elementTop;
      // De 50px (móvil) / 100px (desktop) hacia 0px (centro)
      const maxRange = window.innerWidth < 768 ? 50 : 100;
      return Math.max(Math.min(-scrollRelative * 0.3, maxRange), -maxRange);
    }
    return 0;
  });

  return (
    <section
      ref={ref}
      className="
        relative z-30
        mt-10 md:mt-14
        bg-brown
        rounded-t-[44px] md:rounded-t-[70px]
        shadow-[0_-20px_60px_rgba(0,0,0,0.06)]
      "
    >
      {/* HEADER: OUR / PROCESS (2 filas, más grande) */}
      <div className="px-6 md:px-12 pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="uppercase font-neue tracking-tight leading-[1.2] sm:leading-[1.0] md:leading-[0.88] text-beige">
          {/* OUR (izquierda) */}
          <div className="flex justify-start pl-2 sm:pl-6 md:pl-12">
            <motion.span
              style={{ x: ourTransform }}
              className="text-[14vw] sm:text-[18vw] md:text-[10.5vw] whitespace-nowrap"
            >
              OUR
            </motion.span>
          </div>

          {/* PROCESS (derecha) */}
          <div className="flex justify-end pr-2 sm:pr-6 md:pr-12">
            <motion.span
              style={{ x: processTransform }}
              className="text-[14vw] sm:text-[18vw] md:text-[10.5vw] whitespace-nowrap"
            >
              PROCESS
            </motion.span>
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
      <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start py-5 sm:py-6 md:py-8">
        {/* número */}
        <div className="col-span-3 sm:col-span-4 md:col-span-3 flex justify-center flex-shrink-0">
          <div className="bg-black text-beige w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] flex items-center justify-center">
            <span className="font-neue font-bold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[96px] leading-none">
              {index + 1}
            </span>
          </div>
        </div>

        {/* texto */}
        <div className="col-span-9 sm:col-span-8 md:col-span-9">
          <h3 className="uppercase font-neue font-semibold tracking-tight text-beige text-[16px] sm:text-[20px] md:text-[26px] lg:text-[34px] leading-tight">
            {step.title}
          </h3>

          <p className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-beige/75 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-relaxed max-w-[62ch]">
            {step.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
