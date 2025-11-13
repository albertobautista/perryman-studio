import React from "react";
import { ProjectCard } from "./components/ProjectCard";

const projects = [
  {
    title: "SONY",
    subtitle: "BRANDING · WEB · PUBLICIDAD",
    description:
      "Centrada en la calidad y exclusividad de sus tejidos, Ugoki se eleva por encima de la competencia. Desarrollamos una identidad visual y una estrategia digital que reflejan el cuidado detrás de cada prenda.",
    buttonLabel: "Ver proyecto",
    buttonHref: "/proyectos/ugoki",
    media: {
      type: "image" as const,
      src: "/images/projects/sony.webp",
      alt: "Landing de campaña Bayer",
    },
  },
  {
    title: "Warner Bros",
    subtitle: "CAMPAÑA DIGITAL",
    description:
      "Una experiencia interactiva para invitar a médicos a pedir deseos para sus pacientes y sumarlos en una acción colectiva.",
    buttonLabel: "Ver proyecto",
    buttonHref: "/proyectos/bayer",
    media: {
      type: "image" as const,
      src: "/images/projects/warner.webp",
      alt: "Landing de campaña Bayer",
    },
  },
  {
    title: "Disney",
    subtitle: "WEB · E-COMMERCE",
    description:
      "Diseño y desarrollo de una experiencia de compra enfocada en la simplicidad y la conversión.",
    buttonLabel: "Ver proyecto",
    buttonHref: "/proyectos/ecommerce",
    media: {
      type: "image" as const,
      src: "/images/projects/disney.webp",
      alt: "Mockup e-commerce",
    },
  },
  {
    title: "Marvel",
    subtitle: "WEB · E-COMMERCE",
    description:
      "Diseño y desarrollo de una experiencia de compra enfocada en la simplicidad y la conversión.",
    buttonLabel: "Ver proyecto",
    buttonHref: "/proyectos/ecommerce",
    media: {
      type: "image" as const,
      src: "/images/projects/marvel.webp",
      alt: "Mockup e-commerce",
    },
  },
];

const Projects = () => {
  return (
    <section className="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
