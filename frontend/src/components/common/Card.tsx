import type { ReactNode } from "react"
import { theme } from "../../design/theme"

interface CardProps {
  children: ReactNode
  padding?: keyof typeof theme.spacing
  shadow?: keyof typeof theme.shadows
  onClick?: () => void
  hoverable?: boolean
}

export default function Card({
  children,
  padding = "md",
  shadow = "sm",
  onClick,
  hoverable = false
}: CardProps) {
  const cardStyles = {
    backgroundColor: "#ffffff",
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing[padding],
    boxShadow: theme.shadows[shadow],
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    ...(hoverable && {
      cursor: "pointer",
      ":hover": {
        transform: "translateY(-4px)",
        boxShadow: theme.shadows.lg
      }
    })
  }

  return (
    <div
      onClick={onClick}
      style={cardStyles}
    >
      {children}
    </div>
  )
}

