import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perryman Studio",
  description: "Perryman Studio - Agencia de branding y diseño gráfico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
