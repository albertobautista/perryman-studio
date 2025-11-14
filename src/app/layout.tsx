import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./sections/Footer";

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
    <html lang="es">
      <body className="antialiased bg-red">{children}</body>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
