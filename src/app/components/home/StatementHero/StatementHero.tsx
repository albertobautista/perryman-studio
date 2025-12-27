"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type StatementHeroProps = {
  image?: string; // cutout pequeño (opcional)
};

export default function StatementHero({ image }: StatementHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden font-neue">
      <div className="relative z-20 px-6 md:px-12 pt-24 md:pt-32 pb-20">
        <div className="uppercase font-sans tracking-tight leading-[0.92] text-beige">
          {/* Row 1 */}
          <div className="flex justify-between items-start">
            <span className="text-[16vw] md:text-[8vw]">CREATIVIDAD,</span>
          </div>

          {/* Row 2 */}
          <div className="flex justify-center">
            <span className="text-[16vw] md:text-[8vw]">INNOVACIÓN,</span>
          </div>
          <div className="flex">
            <span className="text-[16vw] md:text-[8vw]">ESTRATEGIAS,</span>
          </div>

          {/* Row 3 */}
          <div className="flex justify-between items-end">
            <span className="text-[16vw] md:text-[8vw]">Since.</span>

            <span className="text-[14vw] md:text-[7vw] leading-none">2020</span>
          </div>
        </div>
      </div>

      {/* Cutout opcional (como en la referencia) */}
      {image && (
        <motion.div
          className="
            pointer-events-none
            absolute
            right-[12%]
            top-[38%]
            w-[70px] h-[110px]
            md:w-[90px] md:h-[140px]
            z-10
          "
          animate={
            reduceMotion ? {} : { y: [0, -3, 1, -2, 0], x: [0, 1, 0, -1, 0] }
          }
          transition={{
            duration: 2.4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Image
            src={image}
            alt="Decorative cutout"
            fill
            className="object-contain"
          />
        </motion.div>
      )}
    </section>
  );
}
