import Header from "./Header"
import Footer from "./Footer"

export default function MainLayout({ children }: { children: React.ReactNode }) {

 return (
   <div
     style={{
       display: "flex",
       flexDirection: "column",
       minHeight: "100vh"
     }}
   >

     <Header />

     <main
       style={{
         flex: 1,
         maxWidth: "1200px",
         margin: "0 auto",
         padding: "40px 20px"
       }}
     >
       {children}
     </main>

     <Footer />

   </div>
 )

}