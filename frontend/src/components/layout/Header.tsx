import { Link } from "react-router-dom"
import LayoutContainer from "../../layout/LayoutContainer"

export default function Header() {
 return (
   <header style={{
     borderBottom: "1px solid #eaeaea",
     padding: "15px 0"
   }}>
     <LayoutContainer>
       <div style={{
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center"
       }}>
         <Link to="/" style={{ fontSize: "24px", fontWeight: "bold" }}>
           The NRI Diary
         </Link>
         <nav>
           <Link to="/search" style={{ marginLeft: "20px" }}>Search</Link>
         </nav>
       </div>
     </LayoutContainer>
   </header>
 )
}
