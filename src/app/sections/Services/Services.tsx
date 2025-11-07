"use client";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

export type ShowcaseItem = {
  id: string;
  title: string;
  blurb: string;
  image: string;
};

const DEFAULT_ITEMS: ShowcaseItem[] = [
  {
    id: "branding",
    title: "Branding",
    blurb:
      "Creamos identidades coherentes y memorables con aplicaciones reales.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "naming",
    title: "Naming",
    blurb: "Encontramos un nombre con tono y propósito para tu marca.",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "web",
    title: "Web",
    blurb:
      "Diseñamos sitios web que integran estética, performance y contenido alineado al branding.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "grafico",
    title: "Diseño Gráfico",
    blurb:
      "Piezas con sello propio: cartas, packaging, señalética, merchandising y más.",
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "asesorias",
    title: "Asesorías",
    blurb:
      "Acompañamiento estratégico en identidad visual, comunicación y redes.",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop",
  },
];

const Title = ({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) => (
  <motion.h2
    style={{ fontSize: "clamp(2.25rem, 6vw, 7rem)", lineHeight: 1.05 }}
    className={
      active
        ? " cursor-pointer font-neue font-black text-white"
        : "font-neue font-black text-white/40 cursor-pointer"
    }
    initial={false}
    animate={{ x: active ? 0 : 0 }}
    whileHover={{ x: 12 }}
    transition={{ type: "spring", stiffness: 260, damping: 26 }}
  >
    {children}
  </motion.h2>
);

export default function ServicesShowcase({
  items = DEFAULT_ITEMS,
}: {
  items?: ShowcaseItem[];
}) {
  const [active, setActive] = React.useState(items[2]?.id ?? items[0].id);

  // refs + observers por item para cambio por scroll
  const refs = React.useMemo(
    () =>
      Object.fromEntries(
        items.map((i) => [i.id, React.createRef<HTMLDivElement>()])
      ),
    [items]
  );

  items.forEach((i) => {
    const ref = refs[i.id];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inView = useInView(ref, { margin: "-42% 0px -42% 0px" });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      if (inView) setActive(i.id);
    }, [inView, i.id]);
  });

  const onHover = (id: string) => () => setActive(id);

  const activeItem = items.find((i) => i.id === active) ?? items[0];

  return (
    <section className="mt-40">
      <div className="grid gap-6 md:gap-10 md:grid-cols-12">
        {/* Lista grande izquierda */}
        <div className="md:col-span-7">
          <ul className="space-y-4 md:space-y-6">
            {items.map((i) => (
              <li key={i.id}>
                <div ref={refs[i.id]} className="h-0" aria-hidden />
                <button
                  type="button"
                  onMouseEnter={onHover(i.id)}
                  onFocus={onHover(i.id)}
                  aria-current={active === i.id}
                  className="group text-left outline-none"
                >
                  <Title active={active === i.id}>{i.title}</Title>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Panel derecho sticky */}
        <div className="md:col-span-5">
          <div className="sticky top-24">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeItem.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-card">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-6 text-xl leading-relaxed text-white/90 font-neue">
                  {activeItem.blurb}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
