import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: {
    default: "Procesos",
    template: "Procesos | %s",
  },
  description: "Administracion de presupuesto en la FES Acatlan",
  authors: [{ name: "FES Acatlán" }],
  creator: "Lino & Erick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <HeaderAnterior /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}