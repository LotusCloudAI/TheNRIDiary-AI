import LayoutContainer from "../../layout/LayoutContainer"
import Header from "./Header"
import Footer from "./Footer"

export default function MainLayout({ children }: { children: React.ReactNode }) {
 return (
   <div>
     <Header />
     <main>
       <LayoutContainer>
         {children}
       </LayoutContainer>
     </main>
     <Footer />
   </div>
 )
}
