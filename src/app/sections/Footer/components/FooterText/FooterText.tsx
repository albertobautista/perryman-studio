"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function FooterText({ headline }: { headline: string }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const characters = headline.split("");

  return (
    <motion.h2
      ref={ref}
      className="
        w-full text-center font-bold leading-none select-none
        text-[18vw] md:text-[15vw] lg:text-[20vw]
        text-brown
      "
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: inView ? index * 0.05 : 0,
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
}
