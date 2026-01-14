import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek Singh | Full Stack Developer",
  description:
    "Portfolio of Abhishek Singh – Full Stack Developer specializing in Next.js, MERN stack, and modern web applications.",

  openGraph: {
    title: "Abhishek Singh | Full Stack Developer",
    description:
      "Explore projects, experience, and skills in Next.js, MERN stack, and scalable web development.",
    url: "https://portfolio-swart-eight-19.vercel.app/",
    siteName: "Abhishek Portfolio",
    images: [
      {
        url: "https://portfolio-swart-eight-19.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishek Singh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhishek Singh | Full Stack Developer",
    description:
      "Portfolio of Abhishek Singh – Full Stack Developer (Next.js, MERN).",
    images: ["https://portfolio-swart-eight-19.vercel.app/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
