import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./sections/Footer";
import { Preloader } from "./components/general/Preloader";

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
      <body className="antialiased bg-red">
        <Preloader
          logoSrc="/images/home/cherry.png"
          bgColor="bg-beige"
          totalMs={1200}
        />

        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
