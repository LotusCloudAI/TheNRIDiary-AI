import type { ReactNode } from "react"
import LayoutContainer from "../../layout/LayoutContainer"

interface ContainerProps {
  children: ReactNode
  as?: "div" | "section" | "article"
  bgColor?: string
  spacing?: "sm" | "md" | "lg" | "none"
}

export default function Container({
  children,
  as = "div",
  bgColor,
  spacing = "md"
}: ContainerProps) {
  const spacingMap = {
    none: "0",
    sm: "20px",
    md: "40px",
    lg: "60px"
  }

  const Component = as

  return (
    <Component style={{
      backgroundColor: bgColor,
      padding: `${spacingMap[spacing]} 0`
    }}>
      <LayoutContainer>
        {children}
      </LayoutContainer>
    </Component>
  )
}

