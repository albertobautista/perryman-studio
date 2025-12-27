"use client";

import { useId, useState } from "react";

type Item = {
  title: string;
  body: string;
};

type ServicesAccordionProps = {
  items: Item[];
};

export default function ServicesAccordion({ items }: ServicesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-beige rounded-4xl">
      <div className="px-6 md:px-12 py-12 md:py-16">
        <div className="h-px w-full bg-black/20" />

        <div className="divide-y divide-black/15">
          {items.map((item, idx) => (
            <AccordionRow
              key={`${item.title}-${idx}`}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() =>
                setOpenIndex((prev) => (prev === idx ? null : idx))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: Item;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentId = useId();

  return (
    <div className="py-7 md:py-8">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex items-start justify-between gap-6 text-left"
      >
        <span
          className={`font-neue tracking-tight leading-[0.95] text-[10vw] md:text-[2.2vw] ${
            isOpen ? "text-black" : "text-black/55"
          }`}
        >
          {item.title}
        </span>

        <span className="mt-2 md:mt-3 shrink-0">
          <PlusMinusIcon isOpen={isOpen} />
        </span>
      </button>

      <div
        id={contentId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-4 font-neue md:mt-5 text-black/80 text-[14px] md:text-[15px] leading-relaxed">
            {item.body}
          </p>
        </div>
      </div>
    </div>
  );
}

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-black/35 text-black/80">
      <span className="relative block h-4 w-4">
        {/* horizontal */}
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
        {/* vertical (solo cuando está cerrado) */}
        {!isOpen && (
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
        )}
      </span>
    </span>
  );
}
