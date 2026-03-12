import React from "react"
import Header from "./Header"
import Footer from "./Footer"

type Props = {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#f5f5f5"
      }}
    >

      {/* Header */}

      <Header />

      {/* Main Content */}

      <main
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px"
        }}
      >
        {children}
      </main>

      {/* Footer */}

      <Footer />

    </div>
  )
}
