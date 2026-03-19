import type { ReactNode } from "react"
import { theme } from "../../design/theme"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  fullWidth?: boolean
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  type = "button",
  fullWidth = false
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: theme.colors.primary,
          color: "#ffffff",
          border: "none"
        }
      case "secondary":
        return {
          backgroundColor: theme.colors.secondary,
          color: "#ffffff",
          border: "none"
        }
      case "outline":
        return {
          backgroundColor: "transparent",
          color: theme.colors.primary,
          border: `1px solid ${theme.colors.primary}`
        }
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return {
          padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
          fontSize: theme.typography.small
        }
      case "md":
        return {
          padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          fontSize: theme.typography.body
        }
      case "lg":
        return {
          padding: `${theme.spacing.md} ${theme.spacing.lg}`,
          fontSize: theme.typography.h3
        }
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...getVariantStyles(),
        ...getSizeStyles(),
        borderRadius: theme.borderRadius.md,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        width: fullWidth ? "100%" : "auto",
        transition: "all 0.2s ease"
      }}
    >
      {children}
    </button>
  )
}
