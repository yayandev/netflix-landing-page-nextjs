import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix",
  description: "Netflix landing page with Next.js",
  openGraph: {
    images: [
      {
        url: "/android-chrome-512x512.png",
      },
    ],
    authors: "Yayan Faturrohman",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="in">
      <body className={inter.className}>
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
