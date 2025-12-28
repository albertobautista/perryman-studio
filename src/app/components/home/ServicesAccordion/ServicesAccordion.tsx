"use client";

import { useId, useState } from "react";

type Item = {
  title: string;
  body: string;
};

type ServicesAccordionProps = {
  items: Item[];
  textColor?: string; // ej: "text-brown" | "text-black"
};

export default function ServicesAccordion({
  items,
  textColor = "text-brown",
}: ServicesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-brow rounded-4xl">
      <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
        <div className="h-px w-full bg-brown" />

        <div className="divide-y divide-brown">
          {items.map((item, idx) => (
            <AccordionRow
              key={`${item.title}-${idx}`}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() =>
                setOpenIndex((prev) => (prev === idx ? null : idx))
              }
              textColor={textColor}
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
  textColor,
}: {
  item: Item;
  isOpen: boolean;
  onToggle: () => void;
  textColor: string;
}) {
  const contentId = useId();

  return (
    <div className="py-5 sm:py-6 md:py-8">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex items-start justify-between gap-4 sm:gap-6 text-left cursor-pointer"
      >
        <span
          className={`font-neue tracking-tight leading-[0.9] text-[6vw] sm:text-[5vw] md:text-[2.2vw] ${
            isOpen ? textColor : `${textColor}`
          }`}
        >
          {item.title}
        </span>

        <span className="mt-1 sm:mt-2 md:mt-3 shrink-0">
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
          <p
            className={`mt-3 sm:mt-4 md:mt-5 font-neue ${textColor} text-[12px] sm:text-[14px] md:text-[30px] leading-relaxed`}
          >
            {item.body}
          </p>
        </div>
      </div>
    </div>
  );
}

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-brown/35 text-brown/80">
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
