import { About } from "./components/home/About";
import { Hero } from "./components/home/Hero";
import { Process } from "./components/home/Process";
import { ServiceCategoryTitle } from "./components/home/ServiceCategoryTitle";
import { ServicesAccordion } from "./components/home/ServicesAccordion";
import { ServicesTitle } from "./components/home/ServicesTitle";
import { StatementHero } from "./components/home/StatementHero";
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
      <Hero imageA="/images/home/cherry.png" imageB="/images/home/cherry.png" />
      {/* <Services /> */}
      <About />
      <StatementHero image="/images/home/cherry.png" />
      <ServicesTitle />
      <ServiceCategoryTitle pill="BRAND" title="STRATEGY" />
      <ServicesAccordion
        items={[
          {
            title: "CREATIVE AND PRODUCTION DIRECTION",
            body: "Acompañamos a tu marca en todo el proceso creativo:desde la conceptualización de la idea hasta la ejecución producción. Nuestro enfoque asegura que cada pieza de contenido proyecte una identidad sólida, estratégica y coherente con los valores y la historia de tu marca.",
          },
          {
            title: "CONTENT CREATION & SOCIAL MEDIA CONSULTING",
            body: "Creamos estrategias digitales que conectan marcas con audiencias reales, transformando ideas en contenido atractivo y resultados medibles.",
          },
          {
            title: "PR PARTNERSHIP COORDINATION",
            body: "Impulsamos tu marca a través de colaboraciones estratégicas con creadores e influencers que realmente conectan con tu público.",
          },
          {
            title: "BESPOKE EVENTS",
            body: "Diseñamos experiencias únicas que generan impacto y conexión con tu comunidad,aliados y clientes.",
          },
          {
            title: "BRAND DEVELOPMENT & BRAND ELEMENTS CONSULTING",
            body: "Construimos marcas con propósito, diseñando identidades que inspiran confianza y destacan en el mercado.",
          },
          {
            title: "TRUNKSHOW HOSTING",
            body: "Organizamos y producimos trunk shows exclusivos en Madrid y Panamá para marcas de moda y lifestyle. Como objetivo brindamos a las marcas una plataforma boutique para presentar colecciones, generar ventas privadas y posicionarse en mercados internacionales de manera aspiracional y culturalmente relevante.",
          },
        ]}
      />

      <ServiceCategoryTitle title="FOR CREATORS" />
      <ServicesAccordion
        items={[
          {
            title: "CONTENT DIRECTION & CREATOR STRATEGY",
            body: "Diseñamos estrategias personalizadas para creadores de contenido que buscan profesionalizar su marca personal, optimizar su presencia digital y construir un posicionamiento sólido dentro de la industria. El enfoque combina dirección creativa, planificación estratégica y acompañamiento continuo, asegurando que cada paso desde la creación de contenido hasta las alianzas comerciales esté alineado con tu identidad, valores y objetivos de crecimiento.",
          },
          {
            title: "MEDIA KIT CREATION",
            body: "Diseñamos media kits personalizados que reflejan tu esencia como creadora: tu estética, tu comunidad y el impacto real de tu contenido. El objetivo es ayudarte a profesionalizar tu presencia digital, mostrando tu trabajo de manera clara, visualmente coherente y estratégica ante marcas y agencias.",
          },
          {
            title: "FASHION WEEK SUPPORT & CONTENT DIRECTION",
            body: "En Perryman Studio, entendemos que asistir a Fashion Week no es solo una invitación: es una oportunidad estratégica para fortalecer tu posicionamiento, generar contenido de alto valor y conectar con la industria de la moda internacional. Este servicio ofrece un acompañamiento integral desde la planeación previa hasta el seguimiento post-evento para que cada aparición o colaboración se traduzca en visibilidad, crecimiento y relaciones duraderas.",
          },
        ]}
      />
      <Process
        steps={[
          {
            title: "Discovery",
            body: "We learn about the structure of the company, its context, its history, its values, and its strengths and weaknesses.",
          },
          {
            title: "Identification",
            body: "We identify opportunities to develop solutions with the potential to make a real impact.",
          },
          {
            title: "Creation",
            body: "We craft the brand and its set of defined objectives, and establish a clear system.",
          },
          {
            title: "Declination",
            body: "We extend the identity into touchpoints and create a consistent brand world.",
          },
          {
            title: "Implementation",
            body: "We support the rollout and ensure consistency across channels and teams.",
          },
        ]}
      />

      <ImageCarousel images={images} loop height={400} gap={24} radius="5px" />
      <ServiceCategoryTitle title="Projects" />

      <Projects />
    </main>
  );
}
