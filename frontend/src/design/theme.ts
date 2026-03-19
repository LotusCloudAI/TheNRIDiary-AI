export const theme = {
  colors: {
    primary: "#2563eb",      // Blue
    secondary: "#7c3aed",    // Purple
    accent: "#db2777",        // Pink
    background: "#ffffff",
    text: "#1f2937",          // Dark gray
    textLight: "#6b7280",     // Medium gray
    border: "#e5e7eb",        // Light gray
    error: "#ef4444",         // Red
    success: "#10b981",       // Green
    warning: "#f59e0b"        // Orange
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px"
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    h1: "2.5rem",
    h2: "2rem",
    h3: "1.5rem",
    body: "1rem",
    small: "0.875rem"
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px"
  }
} as const

export type Theme = typeof theme
