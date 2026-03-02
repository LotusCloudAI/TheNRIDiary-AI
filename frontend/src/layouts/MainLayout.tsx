import React from "react";
import Header from "../components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
 return (
   <div>
     <Header />
     <main style={{ padding: "20px" }}>
       {children}
     </main>
   </div>
 );
};

export default MainLayout;
