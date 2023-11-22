import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";
import { ReactNode, Suspense } from "react";
import Loading from "./loading";
import ThreeBackground from "@/components/Three/ThreeBg";

const montserrat = Montserrat({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi portafolio",
  description: "Portafolio hecho por Julián David Rincón Espinosa.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <ThreeBackground />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
