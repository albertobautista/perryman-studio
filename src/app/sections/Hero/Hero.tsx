"use client";
import { motion } from "framer-motion";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

export default function Hero() {
  return (
    <motion.section
      id="hero-servicios"
      aria-labelledby="hero-servicios-heading"
      className="pt-24 md:pt-32"
      initial="hidden"
      animate="show"
      variants={stagger}
    >
      {/* Título principal */}
      <motion.h1
        id="hero-servicios-heading"
        variants={fadeUp}
        className="font-neue font-extrabold leading-[1] tracking-tight text-white"
        style={{ fontSize: "clamp(2.75rem, 8vw + 1rem, 9rem)" }}
      >
        Nuestros servicios
      </motion.h1>

      {/* Contenido descriptivo */}
      <div
        className="mt-24 grid items-start gap-8 md:gap-12 md:grid-cols-12"
        role="group"
        aria-labelledby="hero-servicios-heading"
      >
        {/* Statement destacado */}
        <motion.p
          variants={fadeUp}
          className="md:col-span-7 font-neue font-extrabold leading-tight text-white"
          style={{ fontSize: "clamp(1.5rem, 2.6vw + 0.75rem, 3.25rem)" }}
        >
          Diseñamos para transformar ideas en resultados, con una mirada fresca,
          innovadora y estratégica.
        </motion.p>

        {/* Párrafos de apoyo */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-5 space-y-5 max-w-prose"
        >
          <p className="font-neue text-lg md:text-xl text-white/90">
            En Ten10 acompañamos a marcas a construir universos visuales con
            intención, desde la idea hasta la materialización del proyecto.
          </p>
          <p className="font-neue text-lg md:text-xl text-white/90">
            Transformamos conceptos en identidades sofisticadas, coherentes y
            memorables. Diseñamos marcas con una narrativa visual precisa,
            pensada en cada punto de contacto.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
