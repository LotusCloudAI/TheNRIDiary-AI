import React from "react";

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={logoStyle}>The NRI Diary</h1>
      </div>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#1e293b",
  padding: "20px",
  color: "#ffffff",
};

const containerStyle: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const logoStyle: React.CSSProperties = {
  margin: 0,
};

export default Header;