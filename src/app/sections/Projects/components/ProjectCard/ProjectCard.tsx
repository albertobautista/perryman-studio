"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type MediaImage = {
  type: "image";
  src: string;
  alt: string;
};

type MediaVideo = {
  type: "video";
  src: string;
  /** póster opcional mientras carga el video */
  poster?: string;
};

type Media = MediaImage | MediaVideo;

type ProjectCardProps = {
  media: Media;
  title: string;
  subtitle?: string; // ej: "BRANDING · WEB · PUBLICIDAD"
  description: string;
  buttonLabel?: string;
  buttonHref?: string; // opcional, si no lo mandas no se renderiza el botón
  className?: string;
};

export function ProjectCard({
  media,
  title,
  subtitle,
  description,
  buttonLabel,
  buttonHref,
  className = "",
}: ProjectCardProps) {
  const [open, setOpen] = React.useState(false);

  // En mobile usamos click para abrir/cerrar; en desktop también funciona,
  // pero además se muestra al hacer hover gracias a Tailwind.
  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <article
      className={[
        "relative overflow-hidden rounded-3xl bg-[#f3f0e8]",
        "shadow-sm hover:shadow-md transition-shadow",
        className,
      ].join(" ")}
    >
      <button
        type="button"
        onClick={toggleOpen}
        className="group relative block w-full text-left focus:outline-none"
      >
        {/* Media (imagen o video) */}
        <div className="relative w-full aspect-[4/5]">
          {media.type === "image" && (
            <Image
              src={media.src}
              alt={media.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 400px, 100vw"
            />
          )}

          {media.type === "video" && (
            <video
              className="h-full w-full object-cover"
              src={media.src}
              poster={media.poster}
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </div>

        {/* Overlay de información */}
        <div
          className={[
            "pointer-events-none absolute inset-0",
            "flex flex-col items-center justify-between",
            "px-6 sm:px-8 py-8 sm:py-10",
            "bg-beige text-black", // amarillo tipo ejemplo
            "transition-opacity duration-300",
            // - En desktop: aparece con hover
            // - En mobile: usamos el estado `open`
            open
              ? "opacity-100"
              : "opacity-0 md:opacity-0 md:group-hover:opacity-100",
          ].join(" ")}
        >
          {/* Título arriba */}
          <div className="w-full text-center">
            <h3 className="text-5xl tracking-[0.18em] font-neue uppercase mb-2">
              {title}
            </h3>

            {subtitle && (
              <p className="text-xs sm:text-sm font-neue font-semibold tracking-[0.16em] uppercase">
                {subtitle}
              </p>
            )}
          </div>

          {/* Descripción centro */}
          <p className="mt-6 mb-8 text-xs font-neue sm:text-sm md:text-lg leading-relaxed max-w-xl text-center">
            {description}
          </p>

          {/* Botón opcional */}
          {buttonLabel && buttonHref && (
            <div className="w-full flex justify-center">
              <Link
                href={buttonHref}
                className="pointer-events-auto font-neue inline-flex items-center justify-center rounded-full px-6 py-2 text-xs sm:text-sm font-medium bg-black text-white hover:bg-black/85 transition-colors"
              >
                {buttonLabel}
              </Link>
            </div>
          )}
        </div>
      </button>
    </article>
  );
}
