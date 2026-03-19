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
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing[padding],
        boxShadow: theme.shadows[shadow],
        transition: hoverable ? "transform 0.2s ease, box-shadow 0.2s ease" : "none",
        cursor: onClick ? "pointer" : "default",
        ...(hoverable && {
          ":hover": {
            transform: "translateY(-2px)",
            boxShadow: theme.shadows.lg
          }
        })
      }}
    >
      {children}
    </div>
  )
}

