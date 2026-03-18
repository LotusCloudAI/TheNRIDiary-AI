import type { ReactNode } from "react"

interface Props {
 children: ReactNode
 bgColor?: string
}

export default function SectionWrapper({ children, bgColor = "transparent" }: Props) {
 return (
   <section style={{
     marginBottom: "60px",
     backgroundColor: bgColor,
     padding: "20px 0"
   }}>
     {children}
   </section>
 )
}
