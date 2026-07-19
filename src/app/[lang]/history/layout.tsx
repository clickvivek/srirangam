import type { Metadata } from 'next';
import { getDictionary } from '../../../dictionaries';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "ta" | "hi" | "te" | "ml" | "kn") as any;
  
  return {
    title: dict?.navigation?.history || "Temple History",
    description: "Read about the rich history and architecture of the Sri Ranganathaswamy Temple, Srirangam."
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
