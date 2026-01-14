// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar/Navbar";
import FooterComponent from "@/components/footer/footer";``
import ScrollAndContactButtons from "@/components/ui-section/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rayzen Power Private Limited",
    template: "%s | Rayzen Power Private Limited",
  },
  description:
    "Rayzen Power Private Limited is a leading manufacturer of high-quality power solutions in India.",
  keywords: [
    "Rayzen Power",
    "Solar Power",
    "Hybrid Systems",
    "Home Automation",
    "Energy Storage",
    "Lithium ESS",
    "Power Solutions India"
  ],
  icons: {
    icon: "/fav.png",
  },
  metadataBase: new URL("https://www.rayzenpower.com"),
  robots: "index, follow",
  openGraph: {
    title: "Rayzen Power Private Limited",
    description: "Rayzen Power Private Limited is a leading manufacturer of high-quality power solutions in India.",
    url: "https://www.rayzenpower.com",
    siteName: "Rayzen Power Private Limited",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayzen Power Private Limited",
    description: "Leading manufacturer of high-quality power solutions in India.",
    images: ["/fav.png"],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Main Navigation */}
        <nav aria-label="Main navigation">
          <NavbarComponent />
        </nav>

        {/* Main Content Landmark */}
        <main id="main-content" role="main">
          {children}
        </main>

        {/* Footer */}
        <footer aria-label="Footer">
          <FooterComponent />
        </footer>
        <ScrollAndContactButtons/>
      </body>
    </html>
  );
}
