import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/src/index.css"; // ✅ your Vite styles
import "./globals.css";  // ✅ Next styles

import MainLayout from "@/src/components/layout/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The NRI Diary",
  description: "Stories. Community. Opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}