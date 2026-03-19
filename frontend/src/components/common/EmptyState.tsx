import { theme } from "../../design/theme"
import Button from "./Button"
import Typography from "./Typography"

interface EmptyStateProps {
  title?: string
  message?: string
  actionLabel?: string
  onAction?: () => void
}

export default function EmptyState({
  title = "No data found",
  message = "There is no content to display at this moment.",
  actionLabel,
  onAction
}: EmptyStateProps) {
  return (
    <div style={{
      textAlign: "center",
      padding: theme.spacing.xxl,
      backgroundColor: "#f9fafb",
      borderRadius: theme.borderRadius.lg
    }}>
      <Typography variant="h3" color="text" align="center">
        {title}
      </Typography>
      <div style={{ margin: theme.spacing.md, color: theme.colors.textLight }}>
        <Typography variant="body" color="textLight" align="center">
          {message}
        </Typography>
      </div>
      {actionLabel && onAction && (
        <Button onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  )
}

