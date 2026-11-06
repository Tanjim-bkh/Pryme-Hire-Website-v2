import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const body = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const title = "Pryme Hire | Multi-Trade Construction Partner";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.supportLine,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: site.supportLine,
    url: "/",
    siteName: site.name,
    locale: "en_AU",
    type: "website",
    images: ["/images/hero-tower.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${body.variable} ${display.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
