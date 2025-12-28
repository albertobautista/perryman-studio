"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type HeroProps = {
  imageA: string;
  imageB: string;
};

export default function Hero({ imageA, imageB }: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative text-brown font-neue z-20 w-full px-4 sm:px-6 md:px-12 pt-6 sm:pt-20 md:pt-32 pb-6 sm:pb-8 md:pb-12">
        {/* MOBILE LAYOUT - Diseño mejorado */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-4">
            {/* Imagen arriba */}
            <motion.div
              className="relative w-20 h-20 shrink-0"
              animate={
                reduceMotion ? {} : { x: [-15, 8, -8, 0], y: [0, 0, 0, 0] }
              }
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <Image
                src={imageA}
                alt="Hero Image"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Título */}
            <h1 className="uppercase font-neue tracking-tight text-center leading-tight">
              <div className="text-[16vw] font-bold">Perryman</div>
              <div className="text-[11vw] font-bold">Studio</div>
              <div className="text-[10vw]  mt-1">Creative Agency</div>
            </h1>
          </div>
        </div>

        {/* TABLET LAYOUT - Transición */}
        <div className="hidden md:hidden lg:hidden">
          <h1 className="uppercase font-neue tracking-tight leading-[0.88]">
            <div className="text-[16vw] whitespace-nowrap">PERRYMAN</div>
            <div className="text-[16vw] whitespace-nowrap">STUDIO</div>
            <div className="flex items-center gap-6 justify-center mt-2">
              <motion.div
                className="relative w-[70px] h-[70px] flex-shrink-0"
                animate={reduceMotion ? {} : { x: [-5, 3, -3, 0] }}
                transition={{
                  duration: 1.6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                <Image
                  src={imageB}
                  alt="Cutout B"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <span className="text-[16vw] whitespace-nowrap">CREATIVE</span>
            </div>
            <div className="text-[16vw] whitespace-nowrap">AGENCY</div>
          </h1>
        </div>

        {/* DESKTOP LAYOUT - Versión original */}
        <h1 className="hidden lg:block uppercase font-neue tracking-tight leading-[0.92]">
          {/* ROW 1: PERRYMAN + imageA */}
          <div className="flex items-center gap-40">
            <span className="text-[8.4vw] whitespace-nowrap flex-shrink-0">
              PERRYMAN
            </span>

            <motion.span
              className="relative shrink-0 w-[100px] h-[120px]"
              animate={
                reduceMotion ? {} : { x: [-10, 5, -5, 0], y: [0, 0, 0, 0] }
              }
              transition={{
                duration: 1.6,
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

          {/* ROW 2: STUDIO (centered) */}
          <div className="flex justify-center">
            <span className="text-[8.4vw] whitespace-nowrap">STUDIO</span>
          </div>

          {/* ROW 3: imageB + CREATIVE (centered) */}
          <div className="flex items-center gap-20 justify-center">
            <motion.span
              className="relative shrink-0 w-[400px] h-[120px]"
              animate={
                reduceMotion ? {} : { x: [-10, 5, -5, 0], y: [0, 0, 0, 0] }
              }
              transition={{
                duration: 1.4,
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

            <span className="text-[8.4vw] whitespace-nowrap flex-shrink-0">
              CREATIVE
            </span>
          </div>

          {/* ROW 4: AGENCY (left-aligned) */}
          <div className="flex">
            <span className="text-[8.4vw] whitespace-nowrap">AGENCY</span>
          </div>
        </h1>
      </div>
    </section>
  );
}
