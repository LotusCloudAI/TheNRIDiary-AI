import type { ReactNode } from "react"

interface GridProps {
  children: ReactNode
  minColumnWidth?: string
  gap?: string
  columns?: number
}

export default function Grid({
  children,
  minColumnWidth = "250px",
  gap = "20px",
  columns
}: GridProps) {
  const gridTemplateColumns = columns
    ? `repeat(${columns}, 1fr)`
    : `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns,
      gap
    }}>
      {children}
    </div>
  )
}
