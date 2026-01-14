"use client";

import React from "react";

type IntroCopySectionProps = {
  leftTop: React.ReactNode;
  leftBottom: React.ReactNode;
  right: React.ReactNode;
};

export default function IntroCopySection({
  leftTop,
  leftBottom,
  right,
}: IntroCopySectionProps) {
  return (
    <section className="w-ful">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Columna izquierda (2 párrafos) */}
          <div className="md:col-span-5">
            <div className="text-[22px] leading-[1.15] tracking-[-0.02em] text-black">
              {leftTop}
            </div>

            <div className="mt-10 text-[22px] leading-[1.15] tracking-[-0.02em] text-black">
              {leftBottom}
            </div>
          </div>

          {/* Columna derecha (1 párrafo) */}
          <div className="md:col-span-5 md:col-start-7">
            <div className="text-[22px] leading-[1.15] tracking-[-0.02em] text-black">
              {right}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
