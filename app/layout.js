import { Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-title",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Verónica & Moris",
  description: "Nuestra boda - 16 de octubre de 2027",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${bodoni.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
