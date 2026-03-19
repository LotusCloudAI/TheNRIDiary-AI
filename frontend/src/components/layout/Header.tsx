import { Link } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"
import LayoutContainer from "../../layout/LayoutContainer"
import SearchModal from "../search/SearchModal"

export default function Header() {
  const { setIsSearchOpen } = useAppContext()

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
            <Link to="/" style={{ fontSize: "24px", fontWeight: "bold" }}>
              The NRI Diary
            </Link>
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
        </LayoutContainer>
      </header>
      <SearchModal />
    </>
  )
}
