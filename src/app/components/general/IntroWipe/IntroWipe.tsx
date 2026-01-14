"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

type IntroWipeProps = {
  onFinish: () => void;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function IntroWipe({ onFinish }: IntroWipeProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    let cancelled = false;

    const wipeOnce = async () => {
      // inicia fuera derecha, ancho normal
      controls.set({ x: "120%", scaleX: 1, skewX: 0 });

      // viaja ancho casi todo el camino; encoge cuando ya está pegado a la izquierda
      await controls.start({
        x: ["120%", "-94%", "-120%"], // keyframe 2 = ya casi pegado a izquierda
        scaleX: [1, 1, 0.5], // shrink SOLO al final
        skewX: [0, -4, 0], // energía sutil (pon 0 si no lo quieres)
        transition: {
          duration: 1.85,
          times: [0, 0.93, 1], // shrink muy al final
          ease: [0.65, 0, 0.2, 1],
          scaleX: { ease: [0.22, 1, 0.36, 1] },
          skewX: { ease: [0.22, 1, 0.36, 1] },
        },
      });
    };

    async function run() {
      // blanco inicial
      await sleep(350);

      // wipe #1
      await wipeOnce();

      // pausa corta entre wipes (la ajustaste a “menos”)
      await sleep(220);

      // reset
      controls.set({ x: "120%", scaleX: 1, skewX: 0 });

      // mini pausa
      await sleep(90);

      // wipe #2
      await wipeOnce();

      // hold final mínimo
      await sleep(120);

      if (!cancelled) onFinish();
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [controls, onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none bg-white">
      {/* Panel negro con tail suave */}
      <motion.div
        className="absolute top-0 bottom-0 right-0 w-[120vw] origin-right"
        animate={controls}
      >
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-y-0 right-0 w-56 bg-gradient-to-l from-black/0 to-black" />
      </motion.div>
    </div>
  );
}
