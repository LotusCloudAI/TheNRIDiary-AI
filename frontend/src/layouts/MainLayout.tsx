import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const layoutStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  padding: "40px 20px",
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={layoutStyle}>
      <Header />
      <main style={contentStyle}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;