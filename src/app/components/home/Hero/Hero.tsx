"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type HeroProps = {
  imageA: string; // imagen 1 (PERRYMAN STUDIO)
  imageB: string; // imagen 2 (CREATIVE AGENCY)
};

export default function Hero({ imageA, imageB }: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      <div className="relative text-beige font-neue z-20 mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-12">
        <h1 className="uppercase font-sans tracking-tight leading-[0.92]">
          {/* ROW 1: PERRYMAN STUDIO + imageA (pegada al texto) */}
          <div className="flex items-baseline gap-10">
            <span className="text-[15vw] md:text-[8.4vw] whitespace-nowrap">
              PERRYMAN STUDIO
            </span>

            <motion.span
              className="
                relative
                shrink-0
                w-[58px] h-[88px]
                md:w-[100px] md:h-[120px]
              "
              animate={
                reduceMotion
                  ? {}
                  : { y: [0, -3, 1, -2, 0], x: [0, 1, 0, -1, 0] }
              }
              transition={{
                duration: 2.4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <Image
                src={imageA}
                alt="Cutout A"
                fill
                className="object-contain"
                priority
              />
            </motion.span>
          </div>

          {/* ROW 2: imageB + CREATIVE AGENCY */}
          <div className="mt-2 md:mt-30 flex items-baseline justify-center gap-4">
            <motion.span
              className="
                relative
                shrink-0
                w-[100px] h-[80px]
                md:w-[100px] md:h-[120px]
              "
              animate={reduceMotion ? {} : { y: [0, -2, 2, -1, 0] }}
              transition={{
                duration: 2.1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay: 0.2,
              }}
            >
              <Image
                src={imageB}
                alt="Cutout B"
                fill
                className="object-contain"
              />
            </motion.span>

            <span className="text-[15vw] md:text-[8.4vw] text-center whitespace-nowrap">
              CREATIVE AGENCY
            </span>
          </div>
        </h1>
      </div>
    </section>
  );
}
