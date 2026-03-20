import { Component } from "react"
import type { ErrorInfo, ReactNode } from "react"
import EmptyState from "./EmptyState"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      
      return (
        <EmptyState
          title="Something went wrong"
          message="We're sorry, but there was an error loading this content."
          actionLabel="Try again"
          onAction={() => window.location.reload()}
        />
      )
    }

    return this.props.children
  }
}
