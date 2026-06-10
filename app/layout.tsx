import type { Metadata } from "next";
import { Spectral, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afuye Iyiola — Full-Stack & Mobile Developer",
  description:
    "Afuye Iyiola — full-stack and mobile developer building web and mobile products end-to-end. React, React Native, Node.",
  openGraph: {
    title: "Afuye Iyiola — Full-Stack & Mobile Developer",
    description: "Building web and mobile products end-to-end.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${spectral.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
