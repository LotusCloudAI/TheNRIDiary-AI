import { ReactNode, useEffect, useState } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    return () => setIsVisible(false)
  }, [])

  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.3s ease, transform 0.3s ease"
    }}>
      {children}
    </div>
  )
}
