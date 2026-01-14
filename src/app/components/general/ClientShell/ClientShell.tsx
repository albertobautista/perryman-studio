"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Preloader } from "../Preloader";
import { IntroProvider } from "@/app/context/intro-context";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [showIntro, setShowIntro] = useState(true);
  const [reveal, setReveal] = useState(false);
  const [revealId, setRevealId] = useState(0);

  useEffect(() => {
    // Siempre que cambia ruta: corre intro siempre
    setShowIntro(true);
    setReveal(false);
  }, [pathname]);

  useEffect(() => {
    // bloquear scroll durante intro
    if (showIntro) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      return;
    }
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }, [showIntro]);

  const finish = () => {
    setShowIntro(false);
    setReveal(true);
    setRevealId((v) => v + 1); // dispara animaciones internas (HeroReveal)
  };

  return (
    <IntroProvider revealId={revealId}>
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key={`intro-${pathname}`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            <Preloader
              logoSrc="/images/home/cherry.png"
              bgColor="bg-brown"
              totalMs={1200}
              onComplete={finish}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido aparece justo al terminar intro */}
      <motion.div
        initial={false}
        animate={{ opacity: reveal ? 1 : 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </IntroProvider>
  );
}
