import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: {
    default: "Procesos Estocásticos - FES Acatlán",
    template: "Procesos Estocásticos | %s",
  },
  description: "Repositorio interactivo de Procesos Estocásticos - Facultad de Estudios Superiores Acatlán, UNAM",
  authors: [{ name: "FES Acatlán, UNAM" }],
  creator: "Lino & Erick",
  keywords: ["Procesos Estocásticos", "Probabilidad", "Matemáticas", "UNAM", "FES Acatlán"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}