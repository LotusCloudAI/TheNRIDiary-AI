import type { Metadata } from "next";

import "@/src/index.css";
import "./globals.css";

import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

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
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#f5f7fa",
          color: "#111",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* HEADER */}
        <Header />

        {/* CONTENT */}
        <div style={{ padding: "20px" }}>
          {children}
        </div>
        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}