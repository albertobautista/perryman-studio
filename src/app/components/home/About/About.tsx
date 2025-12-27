"use client";

export default function About() {
  return (
    <section className="w-full font-neue">
      {/* Divider */}
      <div className="px-6 md:px-12">
        <div className="h-px w-full bg-beige" />
      </div>

      <div className="px-6 md:px-12 pt-6 md:pt-8 pb-10 md:pb-14">
        {/* Title */}
        <p className="uppercase tracking-[0.08em] text-md md:text-xl text-beige">
          About Us
        </p>

        {/* Body */}
        <p className="mt-4 md:mt-5 leading-[1.12] tracking-tight text-beige text-xl md:text-4xl">
          Somos una agencia especializada en PR, Talent y Creative Consulting
          para creadores de contenido, artistas y marcas en fashion, wellness,
          lifestyle y cultura.
        </p>
        <p className="mt-4 md:mt-5 leading-[1.12] tracking-tight text-beige text-xl md:text-4xl">
          Enfocamos nuestro trabajo en una gestión estratégica, cercana y
          personalizada, donde cada colaboración cuenta una historia y cada
          talento se desarrolla bajo una dirección clara, profesional y
          sostenible. Acompañamos a creadores en el crecimiento de sus carreras
          y apoyamos a marcas en la creación de estrategias digitales
          coherentes, relevantes y con impacto real.
        </p>
        <p className="mt-4 md:mt-5 leading-[1.12] tracking-tight text-beige text-xl md:text-4xl">
          Nacimos con la visión de elevar la industria creativa latinoamericana
          y conectar su talento con oportunidades globales.
        </p>
      </div>
    </section>
  );
}
