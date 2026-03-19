import type { ReactNode } from "react"
import { theme } from "../../design/theme"

interface TextProps {
  children: ReactNode
  variant?: "h1" | "h2" | "h3" | "body" | "small"
  color?: keyof typeof theme.colors
  align?: "left" | "center" | "right"
  weight?: "normal" | "medium" | "bold"
}

export default function Typography({
  children,
  variant = "body",
  color = "text",
  align = "left",
  weight = "normal"
}: TextProps) {
  const variantMap = {
    h1: { tag: "h1", size: theme.typography.h1 },
    h2: { tag: "h2", size: theme.typography.h2 },
    h3: { tag: "h3", size: theme.typography.h3 },
    body: { tag: "p", size: theme.typography.body },
    small: { tag: "small", size: theme.typography.small }
  }

  const { tag: Tag, size } = variantMap[variant]
  const weightMap = { normal: 400, medium: 500, bold: 700 }

  return (
    <Tag style={{
      fontSize: size,
      color: theme.colors[color],
      textAlign: align,
      fontWeight: weightMap[weight],
      margin: 0
    }}>
      {children}
    </Tag>
  )
}
