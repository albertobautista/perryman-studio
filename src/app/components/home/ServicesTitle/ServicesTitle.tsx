"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ServicesTitle() {
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

  const servicesTransform = useTransform(scrollY, (latest) => {
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
    <section ref={ref} className="w-full">
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="uppercase tracking-tight leading-[1.2] sm:leading-[0.95] md:leading-[0.9] text-brown font-neue">
          {/* OUR (izquierda) */}
          <div className="flex justify-start pl-2 sm:pl-6 md:pl-12">
            <motion.span
              style={{ x: ourTransform }}
              className="text-[14vw] sm:text-[18vw] md:text-[11vw] whitespace-nowrap"
            >
              OUR
            </motion.span>
          </div>

          {/* SERVICES (derecha) */}
          <div className="flex justify-end pr-2 sm:pr-6 md:pr-12">
            <motion.span
              style={{ x: servicesTransform }}
              className="text-[14vw] sm:text-[18vw] md:text-[11vw] whitespace-nowrap"
            >
              SERVICES
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
