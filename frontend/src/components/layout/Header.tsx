import { Link } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"
import LayoutContainer from "../../layout/LayoutContainer"
import useDevice from "../../hooks/useDevice"

export default function Header() {
  const { searchQuery, setSearchQuery, setIsSearchOpen } = useAppContext()
  const { isMobile } = useDevice()

  return (
    <header style={{
      borderBottom: "1px solid #eaeaea",
      padding: "15px 0"
    }}>
      <LayoutContainer>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px"
        }}>
          <Link to="/" style={{ fontSize: "24px", fontWeight: "bold" }}>
            The NRI Diary
          </Link>
          {isMobile && <div style={{fontSize: "12px", color: "gray"}}>Mobile View</div>}
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
              style={{
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid #ddd"
              }}
            />
            <Link to="/search">Go</Link>
          </div>
        </div>
      </LayoutContainer>
    </header>
  )
}
