import { Link } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"
import { theme } from "../../design/theme"

export default function MobileMenu() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useAppContext()

  if (!isMobileMenuOpen) return null

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#ffffff",
      zIndex: 1050,
      animation: "slideIn 0.3s ease"
    }}>
      <div style={{
        padding: theme.spacing.xl,
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing.lg
      }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              fontSize: "24px",
              background: "none",
              border: "none",
              cursor: "pointer"
            }}
          >
            ×
          </button>
        </div>
        
        <nav style={{
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing.lg
        }}>
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ fontSize: "18px" }}
          >
            Home
          </Link>
          <Link
            to="/category/latest"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ fontSize: "18px" }}
          >
            Latest Stories
          </Link>
          <Link
            to="/category/popular"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ fontSize: "18px" }}
          >
            Popular
          </Link>
          <Link
            to="/search"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ fontSize: "18px" }}
          >
            Search
          </Link>
        </nav>
      </div>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
