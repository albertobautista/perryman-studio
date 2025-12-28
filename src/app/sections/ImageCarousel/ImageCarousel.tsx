"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export type CarouselImage = { src: string; alt?: string };

type Props = {
  images: CarouselImage[];
  loop?: boolean;
  speedSec?: number;
  gap?: number;
  radius?: string;
  autoplayMs?: number;
  pauseOnHover?: boolean;
  height?: number;
};

export default function ImageCarousel({
  images,
  loop = true,
  speedSec = 24,
  gap = 24,
  radius = "0.75rem",
  autoplayMs = 0,
  pauseOnHover = true,
  height = 420, // vertical 3:4
}: Props) {
  // ❗ HOOKS SIEMPRE ARRIBA
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const [paused, setPaused] = React.useState(false);

  // autoplay solo en modo paginado (no loop)
  React.useEffect(() => {
    if (loop) return; // se llama SIEMPRE, pero hace no-op si loop=true
    if (!autoplayMs || paused) return;

    const id = setInterval(() => {
      const el = viewportRef.current;
      if (!el) return;
      el.scrollBy({ left: el.clientWidth + gap, behavior: "smooth" });
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, autoplayMs);

    return () => clearInterval(id);
  }, [autoplayMs, paused, gap, loop]);

  const onPrev = () => {
    const el = viewportRef.current;
    if (!el) return;
    el.scrollBy({ left: -(el.clientWidth + gap), behavior: "smooth" });
  };
  const onNext = () => {
    const el = viewportRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth + gap, behavior: "smooth" });
  };

  const wrapperProps = pauseOnHover
    ? {
        onMouseEnter: () => setPaused(true),
        onMouseLeave: () => setPaused(false),
      }
    : {};

  const hasImages = Array.isArray(images) && images.length > 0;
  const cardWidth = height * (3 / 4); // 3:4 vertical

  // ❗ AHORA SÍ puedes hacer returns condicionales (después de los hooks):
  if (!hasImages) return null;

  if (loop) {
    const strip = [...images, ...images];
    return (
      <section className="w-full mt-20 py-12 select-none">
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <motion.div
            className="flex will-change-transform"
            style={{ gap: `${gap}px` }}
            animate={{ x: [0, -(cardWidth + gap) * images.length] }}
            transition={{
              repeat: Infinity,
              duration: speedSec,
              ease: "linear",
            }}
          >
            {strip.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="relative shrink-0"
                style={{
                  width: cardWidth,
                  height,
                  borderRadius: radius,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt ?? ""}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // paginado
  return (
    <section className="w-full py-12" aria-roledescription="carousel">
      <div className="relative" {...wrapperProps}>
        <div
          ref={viewportRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
          style={{ gap: `${gap}px` }}
          role="group"
          aria-label="Galería de trabajos"
        >
          {images.map((img) => (
            <div
              key={img.src}
              className="relative snap-start shrink-0"
              style={{
                width: cardWidth,
                height,
                borderRadius: radius,
                overflow: "hidden",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt ?? ""}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
          <button
            type="button"
            onClick={onPrev}
            className="pointer-events-auto grid h-10 w-10 place-content-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={onNext}
            className="pointer-events-auto grid h-10 w-10 place-content-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
