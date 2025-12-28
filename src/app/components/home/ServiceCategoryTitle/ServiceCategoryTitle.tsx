"use client";

type ServiceCategoryTitleProps = {
  title: string; // ej: "STRATEGY"
};

export default function ServiceCategoryTitle({
  title,
}: ServiceCategoryTitleProps) {
  return (
    <section className="w-full">
      <div className="px-4 sm:px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Title */}
          <h2 className="mt-4 sm:mt-6 md:mt-8 uppercase font-neue tracking-tight leading-[0.85] sm:leading-[0.88] md:leading-[0.9] text-brown text-[14vw] sm:text-[16vw] md:text-[8vw]">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
}
