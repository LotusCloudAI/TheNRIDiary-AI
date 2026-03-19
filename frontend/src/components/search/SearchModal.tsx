import { useAppContext } from "../../context/AppContext"
import { theme } from "../../design/theme"
import SearchBar from "./SearchBar"
import useDevice from "../../hooks/useDevice"

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useAppContext()
  const { isMobile } = useDevice()

  if (!isSearchOpen) return null

  if (isMobile) {
    // Mobile: Slide from top
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#ffffff",
        padding: theme.spacing.lg,
        boxShadow: theme.shadows.lg,
        zIndex: 1000,
        animation: "slideDown 0.3s ease"
      }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: theme.spacing.sm }}>
          <button
            onClick={() => setIsSearchOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer"
            }}
          >
            ×
          </button>
        </div>
        <SearchBar />
        <style>{`
          @keyframes slideDown {
            from { transform: translateY(-100%); }
            to { transform: translateY(0); }
          }
        `}</style>
      </div>
    )
  }

  // Desktop: Modal overlay
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: "#ffffff",
        width: "600px",
        marginTop: "100px",
        padding: theme.spacing.xl,
        borderRadius: theme.borderRadius.lg,
        boxShadow: theme.shadows.lg
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: theme.spacing.md }}>
          <h3>Search Stories</h3>
          <button
            onClick={() => setIsSearchOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer"
            }}
          >
            ×
          </button>
        </div>
        <SearchBar />
      </div>
    </div>
  )
}

