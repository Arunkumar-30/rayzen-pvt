// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar/Navbar";
import FooterComponent from "@/components/footer/footer";

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
  icons: {
    icon: "/fav.png",
  },
  metadataBase: new URL("https://www.rayzenpower.com"), // change to your domain
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
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
