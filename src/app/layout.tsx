import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Motivation Coach",
  description: "Your personal AI mentor, mindset coach, and productivity guide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`}>
      <body className="min-h-screen flex flex-col font-sans">
        <div className="flex-grow flex flex-col relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
