import React from "react";
import { FooterText } from "./components/FooterText";
import { ContactForm } from "./components/ContactForm";
import { Information } from "./components/Information";

const Footer = () => {
  return (
    <section className="flex flex-col w-full text-white bg-beige min-h-screen">
      <div className="flex-1 flex flex-col">
        <FooterText headline="Let's talk!" />
        <div className="mt-10 flex justify-center px-4">
          <ContactForm />
        </div>
      </div>
      <div className="pt-32">
        <Information
          email="hello@perryman.studio"
          socials={{
            instagram: "https://instagram.com/tuperfil",
            tiktok: "https://tiktok.com/@tuperfil",
            spotify: "https://open.spotify.com/user/tuusuario",
            linkedin: "https://linkedin.com/in/tuusuario",
          }}
        />
      </div>
    </section>
  );
};

export default Footer;
