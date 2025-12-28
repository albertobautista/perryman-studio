"use client";

import Image from "next/image";

type FullWidthMediaProps =
  | {
      type: "image";
      src: string;
      alt: string;
      /** alto relativo del bloque (responsive). */
      heightClassName?: string; // ej: "h-[55vh] md:h-[70vh]"
      priority?: boolean;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      /** si quieres que se pueda pausar, pon controls=true */
      controls?: boolean;
      /** para autoplay (requiere muted) */
      autoPlay?: boolean;
      muted?: boolean;
      loop?: boolean;
      playsInline?: boolean;
      heightClassName?: string; // ej: "h-[55vh] md:h-[70vh]"
    };

export default function FullWidthMedia(props: FullWidthMediaProps) {
  const heightClassName = props.heightClassName ?? "h-[55vh] md:h-[70vh]";

  return (
    <section className="w-full mt-20">
      <div className={`relative w-full ${heightClassName} overflow-hidden`}>
        {props.type === "image" ? (
          <Image
            src={props.src}
            alt={props.alt}
            fill
            className="object-cover"
            priority={props.priority}
          />
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={props.src}
            poster={props.poster}
            controls={props.controls ?? false}
            autoPlay={props.autoPlay ?? true}
            muted={props.muted ?? true}
            loop={props.loop ?? true}
            playsInline={props.playsInline ?? true}
            preload="metadata"
          />
        )}
      </div>
    </section>
  );
}
