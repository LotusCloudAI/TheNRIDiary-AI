import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;