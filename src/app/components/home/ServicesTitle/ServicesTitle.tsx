"use client";

export default function ServicesTitle() {
  return (
    <section className="w-full  overflow-hidden">
      <div className="px-6 md:px-12 py-16 md:py-24">
        <div className="uppercase tracking-tight leading-[0.9] text-beige font-neue">
          {/* OUR (izquierda) */}
          <div className="flex justify-start">
            <span className="text-[22vw] md:text-[11vw]">OUR</span>
          </div>

          {/* SERVICES (derecha) */}
          <div className="flex justify-end -mt-4 md:-mt-8">
            <span className="text-[22vw] md:text-[11vw]">SERVICES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
