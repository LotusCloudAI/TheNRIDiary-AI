import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"
import { theme } from "../../design/theme"
import Button from "../common/Button"

export default function SearchBar() {
  const { searchQuery, setSearchQuery, setIsSearchOpen } = useAppContext()
  const [localQuery, setLocalQuery] = useState(searchQuery)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(localQuery)
    setIsSearchOpen(false)
    navigate("/search")
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <div style={{
        display: "flex",
        gap: theme.spacing.sm
      }}>
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search stories, categories, or locations..."
          style={{
            flex: 1,
            padding: theme.spacing.sm,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: theme.borderRadius.sm,
            fontSize: theme.typography.body
          }}
          autoFocus
        />
        <Button type="submit" size="md">Search</Button>
      </div>
    </form>
  )
}
