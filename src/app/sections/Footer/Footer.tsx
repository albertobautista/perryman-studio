import React from "react";
import { FooterText } from "./components/FooterText";
import { ContactForm } from "./components/ContactForm";

const Footer = () => {
  return (
    <section className="flex flex-col w-full text-white pt-24 pb-32">
      <FooterText headline="Let’s talk!" />
      <div className="mt-24 flex justify-center px-4">
        <ContactForm />
      </div>
    </section>
  );
};

export default Footer;
