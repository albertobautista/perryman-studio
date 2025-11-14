import React from "react";

export function FooterText({ headline }: { headline: string }) {
  return (
    <h2
      className="
        w-full text-center font-bold leading-none select-none
        text-[18vw] md:text-[15vw] lg:text-[20vw]
      "
    >
      {headline}
    </h2>
  );
}
