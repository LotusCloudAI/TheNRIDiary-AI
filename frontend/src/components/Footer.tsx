import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle}>
          © {new Date().getFullYear()} The NRI Diary. All rights reserved.
        </p>
        <p style={subTextStyle}>
          Empowering global NRI voices through stories and technology.
        </p>
      </div>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  marginTop: "60px",
  padding: "30px 20px",
  backgroundColor: "#0f172a",
  color: "#ffffff",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
};

const textStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "14px",
  fontWeight: 500,
};

const subTextStyle: React.CSSProperties = {
  marginTop: "8px",
  fontSize: "12px",
  opacity: 0.7,
};

export default Footer;