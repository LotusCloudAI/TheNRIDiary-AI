import { Link } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"
import LayoutContainer from "../../layout/LayoutContainer"
import SearchModal from "../search/SearchModal"
import HamburgerButton from "../common/HamburgerButton"
import MobileMenu from "./MobileMenu"
import useDevice from "../../hooks/useDevice"

export default function Header() {
  const { setIsSearchOpen, isMobileMenuOpen, setIsMobileMenuOpen } = useAppContext()
  const { isMobile } = useDevice()

  return (
    <>
      <header style={{
        borderBottom: "1px solid #eaeaea",
        padding: "15px 0",
        position: "sticky",
        top: 0,
        backgroundColor: "#ffffff",
        zIndex: 100
      }}>
        <LayoutContainer>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              {isMobile && (
                <HamburgerButton
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              )}
              <Link to="/" style={{ fontSize: "24px", fontWeight: "bold" }}>
                The NRI Diary
              </Link>
            </div>
            
            {!isMobile ? (
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <nav style={{ display: "flex", gap: "20px" }}>
                  <Link to="/category/latest">Latest</Link>
                  <Link to="/category/popular">Popular</Link>
                </nav>
                <button
                  onClick={() => setIsSearchOpen(true)}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                    borderRadius: "20px",
                    cursor: "pointer"
                  }}
                >
                  🔍 Search...
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                style={{
                  padding: "8px",
                  background: "none",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer"
                }}
              >
                🔍
              </button>
            )}
          </div>
        </LayoutContainer>
      </header>
      <SearchModal />
      <MobileMenu />
    </>
  )
}
