import type { Metadata } from "next";
import { Krona_One, Montserrat } from "next/font/google";
import "./globals.css";

const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-krona-one",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Eugenio Rodrigues - Software Engineer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${kronaOne.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
