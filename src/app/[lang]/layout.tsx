import type { Metadata, Viewport } from "next";
import { Lora, Inter } from "next/font/google";
import "../globals.css";

const lora = Lora({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const langTyped = lang as "en" | "ta" | "hi" | "te" | "ml" | "kn";
  return {
    title: {
      template: "%s | Sri Ranganathaswamy Temple",
      default: "Sri Ranganathaswamy Temple | Srirangam",
    },
    description: "Portal for Sri Ranganathaswamy Temple, Srirangam, the largest functioning Hindu temple in the world.",
    manifest: "/srirangam/manifest.json",
    metadataBase: new URL('https://srirangam.org'),
    alternates: {
      canonical: `/${langTyped}`,
      languages: {
        'en': '/en',
        'ta': '/ta',
        'hi': '/hi',
        'te': '/te',
        'ml': '/ml',
        'kn': '/kn'
      }
    },
    openGraph: {
      title: "Sri Ranganathaswamy Temple",
      description: "Portal for Sri Ranganathaswamy Temple, Srirangam",
      url: `https://srirangam.org/${lang}`,
      siteName: "Sri Ranganathaswamy Temple",
      images: [
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sri_Ranganathaswamy_Temple_Gopuram.jpg/1200px-Sri_Ranganathaswamy_Temple_Gopuram.jpg",
          width: 1200,
          height: 630,
          alt: "Sri Ranganathaswamy Temple Gopuram",
        },
      ],
      locale: lang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Sri Ranganathaswamy Temple",
      description: "Portal for Sri Ranganathaswamy Temple, Srirangam",
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sri_Ranganathaswamy_Temple_Gopuram.jpg/1200px-Sri_Ranganathaswamy_Temple_Gopuram.jpg"],
    },
  };
}

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
