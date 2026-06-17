import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sourabh-portfolio.local"),
  title: {
    default: "Sourabh Singh Rawat | Developer Portfolio",
    template: "%s | Sourabh Singh Rawat",
  },
  description:
    "Portfolio of Sourabh Singh Rawat, IIIT Allahabad B.Tech IT student and full-stack developer building practical ML-backed projects.",
  keywords: [
    "Sourabh Singh Rawat",
    "IIIT Allahabad",
    "developer",
    "machine learning",
    "full-stack developer",
    "project portfolio",
  ],
  openGraph: {
    title: "Sourabh Singh Rawat | Developer Portfolio",
    description:
      "Projects, screenshots, build stories, and engineering notes from Sourabh Singh Rawat.",
    url: "https://sourabh-portfolio.local",
    siteName: "Sourabh Singh Rawat Portfolio",
    images: [
      {
        url: "/assets/projects/algoradar/combined-profile.png",
        width: 1200,
        height: 630,
        alt: "AlgoRadar project screenshot from Sourabh Singh Rawat portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourabh Singh Rawat | Developer Portfolio",
    description:
      "Projects, blogs, and engineering journey of Sourabh Singh Rawat.",
    images: ["/assets/projects/algoradar/combined-profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
