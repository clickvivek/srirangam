import type { Metadata, Viewport } from "next";
import { Lora, Inter } from "next/font/google";
import "../globals.css";

const lora = Lora({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Sri Ranganathaswamy Temple | Srirangam",
  description: "Portal for Sri Ranganathaswamy Temple, Srirangam",
  manifest: "/srirangam/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#ff7b00",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ta' },
    { lang: 'hi' },
    { lang: 'te' },
    { lang: 'ml' },
    { lang: 'kn' },
  ];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={`${lora.variable} ${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
