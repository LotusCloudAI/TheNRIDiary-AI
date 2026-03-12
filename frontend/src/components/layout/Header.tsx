import { Link } from "react-router-dom"
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

          <Link to="/" style={navStyle}>Home</Link>

          <Link to="/category/india" style={navStyle}>India</Link>

          <Link to="/category/usa" style={navStyle}>USA</Link>

          <Link to="/category/business" style={navStyle}>Business</Link>

          <Link to="/category/technology" style={navStyle}>Technology</Link>

          <Link to="/category/culture" style={navStyle}>Culture</Link>

          <Link to="/category/opinions" style={navStyle}>Opinions</Link>

        </div>

      </nav>

    </header>
  )
}