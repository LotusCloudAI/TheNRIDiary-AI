import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

interface AppContextType {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  isSearchOpen: boolean
  setIsSearchOpen: (isOpen: boolean) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void

}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <AppContext.Provider value={{
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      isSearchOpen,
      setIsSearchOpen,
      isMobileMenuOpen,
      setIsMobileMenuOpen
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider")
  }
  return context
}
