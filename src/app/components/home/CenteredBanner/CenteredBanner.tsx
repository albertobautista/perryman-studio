"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type CenteredBannerProps = {
  text: string;
  backgroundClassName?: string; // ej: "bg-white" | "bg-[#d9d9d7]"
  heightClassName?: string; // ej: "h-[40vh] md:h-[60vh]"
  textClassName?: string; // ej: "text-brown"
};

export default function CenteredBanner({
  text,
  backgroundClassName = "bg-white",
  heightClassName = "h-[25vh] md:h-[30vh]",
  textClassName = "text-brown",
}: CenteredBannerProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const characters = text.split("");

  return (
    <section className={`w-full ${backgroundClassName} shadow-lg my-10`}>
      <div
        className={`flex items-center justify-center text-center ${heightClassName} px-6 md:px-12`}
        ref={ref}
      >
        <motion.h2
          className={`
            uppercase font-neue tracking-tight leading-[0.95]
            text-[8vw] md:text-[4vw]
            ${textClassName}
          `}
        >
          {characters.map((char, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{
                duration: 0.5,
                ease: "backOut",
                delay: inView ? index * 0.03 : 0,
              }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
}
