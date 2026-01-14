"use client";

import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

export type StackCard = {
  title: string;
  image?: string;
  theme?: "orange" | "dark";
  overlay?: boolean;
  content?: React.ReactNode;
};

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

/**
 * Movimiento vertical para la card "entrante":
 * - antes de ser activa: viene desde abajo (pero no hasta cubrir 100%, sino hasta su offset)
 * - al ser activa: y = 0 (se asienta en su slot)
 */
function useIncomingY(
  progress: MotionValue<number>,
  index: number,
  total: number
) {
  const step = useTransform(progress, (p) => p * (total - 1));

  return useTransform(step, (s) => {
    const local = s - index; // 0 cuando está activa
    // rango suave (-0.75..0) => (1..0)
    const t = clamp01((local + 0.75) / 0.75);
    const yPct = (1 - t) * 100; // 100% abajo, sale completamente
    return `${yPct}%`;
  });
}

export default function StackScrollSlider({
  cards,
  className = "",
  topOffset = 0,
  stackGap = 100,
}: {
  cards: StackCard[];
  className?: string;
  topOffset?: number;
  stackGap?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const total = cards.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Altura del track: más largo para que el efecto se sienta suave
  const trackStyle = useMemo(
    () => ({ height: `${Math.max(3, total + 1) * 110}vh` }),
    [total]
  );

  // Un poquito de escala para el stack completo (opcional, se ve “premium”)
  const stackScale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <div
      ref={ref}
      className={`relative w-full ${className} mt-20`}
      style={trackStyle}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="h-full w-full flex justify-center">
          <div className="relative w-full px-4 sm:px-6 lg:px-10">
            {/* Área donde viven las cards */}
            <motion.div
              className="relative"
              style={{
                height: "100vh",
                transformOrigin: "top center",
                scale: stackScale,
              }}
            >
              {cards.map((card, i) => {
                const incomingY = useIncomingY(scrollYProgress, i, total);

                // Fondo
                const bg = card.theme === "dark" ? "bg-zinc-950" : "bg-brown";

                // Cada card vive en su “slot” con top fijo (para que se vean apiladas)
                const top = topOffset + i * stackGap;

                // Altura: va disminuyendo ligeramente para reforzar el stack (opcional)
                const heightCalc = `100vh`;

                return (
                  <motion.div
                    key={`${card.title}-${i}`}
                    className="absolute left-0 right-0"
                    style={{
                      top,
                      height: heightCalc,
                      zIndex: 100 + i, // la más nueva arriba
                      y: incomingY, // solo la “entrante” se mueve desde abajo
                    }}
                  >
                    <div
                      className={`relative h-full w-full overflow-hidden rounded-[44px] ${bg}`}
                      style={{
                        boxShadow: "0 18px 60px rgba(0,0,0,0.18)",
                      }}
                    >
                      {/* Imagen */}
                      {card.image && (
                        <div className="absolute inset-0">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover"
                            priority={i === 0}
                          />
                          {card.overlay && (
                            <div className="absolute inset-0 bg-black/45" />
                          )}
                        </div>
                      )}

                      {/* Título grande */}
                      <div className="absolute left-0 right-0 top-6 sm:top-8 w-full text-center px-4">
                        <div className="text-white font-neue uppercase tracking-[-0.02em] leading-[0.85]">
                          <div className="text-[14vw] sm:text-[9vw] lg:text-[120px]">
                            {card.title}
                          </div>
                        </div>
                      </div>

                      {/* Contenido adicional */}
                      {card.content && (
                        <div className="absolute inset-0 flex items-center mt-24 p-8">
                          {card.content}
                        </div>
                      )}

                      {/* Marco sutil */}
                      <div className="pointer-events-none absolute inset-0 rounded-[44px] ring-1 ring-white/10" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-5 text-center text-xs text-zinc-500">
              Scroll to stack • Scroll up to go back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
