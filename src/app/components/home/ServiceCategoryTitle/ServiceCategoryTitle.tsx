"use client";

type ServiceCategoryTitleProps = {
  pill?: string; // ej: "BRAND"
  title: string; // ej: "STRATEGY"
};

export default function ServiceCategoryTitle({
  pill,
  title,
}: ServiceCategoryTitleProps) {
  return (
    <section className="w-full">
      <div className="px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Pill */}
          {pill && (
            <div className="inline-flex items-center justify-center rounded-full bg-beige px-5 py-2">
              <span className="uppercase text-white text-[12px] md:text-[13px] tracking-[0.12em]">
                {pill}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="mt-6 uppercase font-sans tracking-tight leading-[0.9] text-beige text-[18vw] md:text-[10vw]">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
}
