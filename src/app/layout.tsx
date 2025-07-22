import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://funmitacatering.com'),
  title: "Funmita Catering - Premium Catering Services | Events | Hampers | Planning",
  description: "Professional catering services specializing in exceptional cuisine, signature cocktails, beautiful hampers, and complete event planning. Serving Lagos and Ogun State.",
  keywords: "catering services, event planning, hampers packaging, cocktails, corporate catering, wedding catering, Lagos catering, Ogba catering, premium catering",
  openGraph: {
    title: "Funmita Catering - Premium Catering Services | Events | Hampers | Planning",
    description: "Professional catering services specializing in exceptional cuisine, signature cocktails, beautiful hampers, and complete event planning. Serving Lagos and Ogun State.",
    images: [
      {
        url: "/FUNMITA CATERING Logo Design.png",
        width: 1200,
        height: 630,
        alt: "Funmita Catering Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funmita Catering - Premium Catering Services | Events | Hampers | Planning",
    description: "Professional catering services specializing in exceptional cuisine, signature cocktails, and complete event planning.",
    images: ["/FUNMITA CATERING Logo Design.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
