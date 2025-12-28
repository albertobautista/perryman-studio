"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok, FaSpotify, FaLinkedinIn } from "react-icons/fa";

type InformationProps = {
  email: string;
  socials: {
    instagram?: string;
    tiktok?: string;
    spotify?: string;
    linkedin?: string;
  };
};

export default function Information({ email, socials }: InformationProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-brown text-white">
      {/* Línea superior */}
      <div className="h-px w-full bg-beige" />

      {/* Social icons */}
      <div className="px-6 md:px-12 py-8 md:py-10">
        <div className="grid grid-cols-4 items-center gap-8 md:gap-12">
          <SocialIcon
            href={socials.linkedin}
            label="LinkedIn"
            icon={<FaLinkedinIn />}
          />
          <SocialIcon
            href={socials.instagram}
            label="Instagram"
            icon={<FaInstagram />}
          />
          <SocialIcon
            href={socials.tiktok}
            label="TikTok"
            icon={<FaTiktok />}
          />
          <SocialIcon
            href={socials.spotify}
            label="Spotify"
            icon={<FaSpotify />}
          />
        </div>
      </div>

      {/* Línea media */}
      <div className="h-px w-full bg-beige" />

      {/* Línea inferior */}
      <div className="h-px w-full bg-beige" />

      {/* Bottom bar */}
      <div className="px-6 md:px-12 py-6 md:py-7 flex font-neue items-center justify-between text-[12px] md:text-[17px] text-beige">
        <span>© {year}. All rights reserved.</span>

        <a
          href={`mailto:${email}`}
          className="underline underline-offset-4 hover:text-beige"
        >
          {email}
        </a>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href?: string;
  label: string;
  icon: React.ReactNode;
}) {
  const base =
    "flex items-center text-beige justify-center text-[44px] md:text-[52px] transition-opacity hover:opacity-75";

  if (!href) {
    return (
      <div className={`${base} opacity-40`} aria-label={label}>
        {icon}
      </div>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className={base}
    >
      {icon}
    </Link>
  );
}
