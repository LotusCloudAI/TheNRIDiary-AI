import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      <head>
        {/* MOBILE RESPONSIVE FIX */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body style={styles.body}>
        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main style={styles.main}>{children}</main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}

// =========================
// STYLES (PRODUCTION READY)
// =========================

const styles: {
  body: React.CSSProperties;
  main: React.CSSProperties;
} = {
  body: {
    margin: 0,
    backgroundColor: "#f5f7fa",
    color: "#111",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },

  main: {
    flex: 1,
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "15px",
    boxSizing: "border-box",
  },
};