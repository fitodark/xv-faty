import type { Metadata, Viewport } from "next";
import { Cormorant_Infant, Great_Vibes, Jost } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const cormorant = Cormorant_Infant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mis XV años · Faty · 19 de diciembre de 2026",
  description:
    "Estás invitado a los XV años de Fátima. Sábado 19 de diciembre de 2026 en Huajuapan de León, Oaxaca. Misa a las 13:00 h y recepción a las 14:00 h.",
  openGraph: {
    title: "Mis XV años · Faty",
    description:
      "Sábado 19 de diciembre de 2026 · Huajuapan de León, Oaxaca. Confirma tu asistencia aquí.",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mis XV años · Faty",
    description: "Sábado 19 de diciembre de 2026 · Huajuapan de León, Oaxaca.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf6f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${greatVibes.variable} ${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
