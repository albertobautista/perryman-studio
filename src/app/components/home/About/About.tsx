"use client";

export default function About() {
  return (
    <section className="w-full mt-20 font-neue">
      {/* Divider */}
      <div className="px-6 md:px-12">
        <div className="h-px w-full bg-brown" />
      </div>

      <div className="px-6 md:px-12 pt-6 md:pt-8 pb-10 md:pb-14">
        {/* Title */}
        <p className="uppercase tracking-[0.08em] text-md md:text-xl font-neue text-brown">
          About Us
        </p>

        {/* Body */}
        <p className="mt-4 md:mt-5 leading-[1.12] tracking-tight text-brown text-xl md:text-4xl font-neue">
          Somos una agencia especializada en PR, Talent y Creative Consulting
          para creadores de contenido, artistas y marcas en fashion, wellness,
          lifestyle y cultura. Enfocamos nuestro trabajo en una gestión
          estratégica, cercana y personalizada, donde cada colaboración cuenta
          una historia y cada talento se desarrolla bajo una dirección clara,
          profesional y sostenible.
        </p>
        <p className="mt-4 md:mt-5 leading-[1.12] tracking-tight text-brown text-xl md:text-4xl font-neue">
          Acompañamos a creadores en el crecimiento de sus carreras y apoyamos a
          marcas en la creación de estrategias digitales coherentes, relevantes
          y con impacto real. Nacimos con la visión de elevar la industria
          creativa latinoamericana y conectar su talento con oportunidades
          globales.
        </p>
      </div>
    </section>
  );
}
