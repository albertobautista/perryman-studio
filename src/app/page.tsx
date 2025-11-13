import { Hero } from "./sections/Hero";
import { ImageCarousel } from "./sections/ImageCarousel";
import { Projects } from "./sections/Projects";
import { Services } from "./sections/Services";

const images = [
  {
    src: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop",
    alt: "Bolsa de papel con logotipo minimalista",
  },
  {
    src: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1600&auto=format&fit=crop",
    alt: "Cartel de fachada con branding limpio",
  },
  {
    src: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop",
    alt: "Tarjeta de presentación con identidad visual",
  },
  {
    src: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1600&auto=format&fit=crop",
    alt: "Cartel de fachada con branding limpio",
  },
];

export default function Home() {
  return (
    <main className="relative flex flex-col max-w-8xl mx-auto px-6 lg:px-8 bg-red">
      <Hero />
      <Services />
      <ImageCarousel images={images} loop height={400} gap={24} radius="5px" />
      <Projects />
    </main>
  );
}
