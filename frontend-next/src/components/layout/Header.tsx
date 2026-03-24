import logo from "../../assets/nri-diary-logo.png"

export default function Header() {

  const navStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "600"
  }

  return (
    <header
      style={{
        background: "white",
        borderBottom: "1px solid #ddd"
      }}
    >

      {/* LOGO ROW */}

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "28px 20px"
        }}
      >
        <img
          src={logo}
          alt="The NRI Diary"
          style={{
            height: "160px",
            width: "auto",
            objectFit: "contain"
          }}
        />
      </div>


      {/* NAVIGATION BAR */}

      <nav
        style={{
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
          background: "#fafafa"
        }}
      >

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "42px",
            padding: "16px 20px",
            fontSize: "17px"
          }}
        >

          <a href="#" style={navStyle}>Home</a>
          <a href="#" style={navStyle}>India</a>
          <a href="#" style={navStyle}>USA</a>
          <a href="#" style={navStyle}>Business</a>
          <a href="#" style={navStyle}>Technology</a>
          <a href="#" style={navStyle}>Culture</a>
          <a href="#" style={navStyle}>Opinions</a>

        </div>

      </nav>

    </header>
  )
}