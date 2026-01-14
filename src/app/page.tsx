import { FaInstagram, FaLinkedinIn, FaSpotify, FaTiktok } from "react-icons/fa";
import { HeroReveal } from "./components/general/HeroReveal";
import { About } from "./components/home/About";
import { CenteredBanner } from "./components/home/CenteredBanner";
import { FullWidthMedia } from "./components/home/FullWidthMedia";
import { Hero } from "./components/home/Hero";
import { IntroCopySection } from "./components/home/IntroCopySection";
import { Process } from "./components/home/Process";
import { ServiceCategoryTitle } from "./components/home/ServiceCategoryTitle";
import { ServicesAccordion } from "./components/home/ServicesAccordion";
import { ServicesTitle } from "./components/home/ServicesTitle";
import StackScrollSlider, {
  StackCard,
} from "./components/home/StackScrollSlider/StackScrollSlider";
import { StatementHero } from "./components/home/StatementHero";
import { Information } from "./sections/Footer/components/Information";
import SocialIcon from "./sections/Footer/components/Information/components/SocialIcon/SocialIcon";
import { ImageCarousel } from "./sections/ImageCarousel";
import { Projects } from "./sections/Projects";
import { Services } from "./sections/Services";
import Image from "next/image";

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

const socials = {
  instagram: "https://instagram.com/tuperfil",
  tiktok: "https://tiktok.com/@tuperfil",
  spotify: "https://open.spotify.com/user/tuusuario",
  linkedin: "https://linkedin.com/in/tuusuario",
};

const cards: StackCard[] = [
  {
    title: "CREATIVIDAD",
    theme: "orange",
    overlay: false,
  },
  {
    title: "INOVACIÓN",
    theme: "dark",
    overlay: true,
  },
  {
    title: "INTENCIÓN",
    theme: "orange",
    overlay: true,
  },
  {
    title: "ESTRATEGIAS",
    theme: "dark",
    overlay: true,
  },
];
const cards2: StackCard[] = [
  {
    title: "CREATIVIDAD",
    theme: "orange",
    overlay: false,
    content: (
      <section className="w-full ">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 py-14 md:py-20">
          {/* TITULOS ARRIBA */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* LEFT TITLE */}
            <div className="md:col-span-6">
              <h2 className="font-neue uppercase tracking-[-0.03em] leading-[0.85] text-beige text-[18vw] sm:text-[12vw] md:text-[90px] lg:text-[100px]">
                THE FOUNDER
              </h2>
            </div>

            {/* RIGHT TITLE */}
            <div className="md:col-span-6 md:text-right">
              <h2 className="font-neue uppercase tracking-[-0.03em] leading-[0.85] text-beige text-[18vw] sm:text-[12vw] md:text-[90px] lg:text-[100px]">
                DANIELLE PERRYMAN
              </h2>
            </div>
          </div>

          {/* CONTENT ABAJO */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* IMAGE UNDER LEFT */}
            <div className="md:col-span-6">
              <div className="relative w-full overflow-hidden rounded-[32px] bg-zinc-200 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80"
                  alt="Team celebrating"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>

            {/* PARAGRAPH UNDER RIGHT */}
            <div className="md:col-span-6 md:text-right">
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/80 max-w-md md:ml-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                consectetur. Necessitatibus, tempore? Aspernatur voluptatibus,
                iure dolorum doloribus illum aliquam ipsum harum, obcaecati ad
                mollitia ea nam placeat tempore eaque ullam.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
  },
];

export default function Home() {
  return (
    <main className="relative flex flex-col max-w-8xl mx-auto px-6 lg:px-8 bg-beige">
      <HeroReveal />
      <About />

      <StackScrollSlider cards={cards} />

      <Hero imageA="/images/home/cherry.png" imageB="/images/home/cherry.png" />
      <IntroCopySection
        leftTop={
          <>
            Enfocamos nuestro trabajo en una gestión estratégica, cercana y
            personalizada, donde cada colaboración cuenta una historia y cada
            talento se desarrolla bajo una dirección clara, profesional y
            sostenible.
          </>
        }
        leftBottom={
          <>
            Acompañamos a creadores en el crecimiento de sus carreras y apoyamos
            a marcas en la creación de estrategias digitales coherentes,
            relevantes y con impacto real.
          </>
        }
        right={
          <>
            Nacimos con la visión de elevar la industria creativa
            latinoamericana y conectar su talento con oportunidades globales.
          </>
        }
      />
      <div className="px-6 md:px-12 py-8 md:py-10">
        <div className="grid grid-cols-4 items-center gap-8 md:gap-12">
          <SocialIcon
            href={socials.linkedin}
            label="LinkedIn"
            icon={<FaLinkedinIn />}
            color="text-brown"
          />
          <SocialIcon
            href={socials.instagram}
            label="Instagram"
            icon={<FaInstagram />}
            color="text-brown"
          />
          <SocialIcon
            href={socials.tiktok}
            label="TikTok"
            icon={<FaTiktok />}
            color="text-brown"
          />
          <SocialIcon
            href={socials.spotify}
            label="Spotify"
            icon={<FaSpotify />}
            color="text-brown"
          />
        </div>
      </div>
      {/* <FullWidthMedia
        type="image"
        src="/images/home/test.webp"
        alt="Studio"
        heightClassName="h-[50vh] md:h-[95vh]"
        priority
      /> */}
      {/* <FullWidthMedia
        type="image"
        src="/images/home/postit.png"
        alt="Studio"
        heightClassName="h-[50vh] md:h-[100vh]"
        priority
      /> */}
      <CenteredBanner text="Where creativity has no boundaries" />
      <ServicesTitle />
      <ServiceCategoryTitle title="For Brands" />
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
        textColor="text-red/80"
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
      <StackScrollSlider cards={cards2} />

      <Projects />
    </main>
  );
}
