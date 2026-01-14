import Link from "next/link";

function SocialIcon({
  href,
  label,
  icon,
  color = "text-beige",
}: {
  href?: string;
  label: string;
  icon: React.ReactNode;
  color?: string;
}) {
  const base = `flex items-center ${color} justify-center text-[44px] md:text-[62px] transition-opacity hover:opacity-75`;

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

export default SocialIcon;
