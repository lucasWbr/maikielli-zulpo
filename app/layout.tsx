import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FloatingWhatsApp from "@/components/global/FloatingWhatsApp";
import { fetchGeneralInfo, fetchSocialMediaGeneral } from "@/utils/actions";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Maikielli Zulpo - Engenheira Ambiental e de Segurança",
  description: "Especialista em consultoria ambiental e segurança do trabalho",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const generalInfo = await fetchGeneralInfo();
  const socialMediaData = await fetchSocialMediaGeneral();

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp
          generalInfo={generalInfo[0]}
          socialMedia={socialMediaData?.socialMedia || []}
        />
      </body>
    </html>
  );
}
