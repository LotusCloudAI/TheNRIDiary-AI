import { theme } from "../../design/theme"

interface LoaderProps {
  size?: "sm" | "md" | "lg"
  color?: keyof typeof theme.colors
}

export default function Loader({ size = "md", color = "primary" }: LoaderProps) {
  const sizeMap = {
    sm: "20px",
    md: "40px",
    lg: "60px"
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px"
    }}>
      <div style={{
        width: sizeMap[size],
        height: sizeMap[size],
        border: `3px solid ${theme.colors.border}`,
        borderTopColor: theme.colors[color],
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
