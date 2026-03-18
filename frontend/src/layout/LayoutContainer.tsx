import type { ReactNode } from "react"

interface Props {
 children: ReactNode
}

export default function LayoutContainer({ children }: Props) {
 return (
   <div style={{
     maxWidth: "1400px",
     margin: "0 auto",
     padding: "20px",
     width: "100%"
   }}>
     {children}
   </div>
 )
}
