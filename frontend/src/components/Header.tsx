import React from "react";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>The NRI Diary</h2>
      <nav>
        <a href="/" style={styles.link}>Home</a>
        <a href="/stories" style={styles.link}>Stories</a>
        <a href="/about" style={styles.link}>About</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    backgroundColor: "#0f172a",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  link: {
    marginLeft: "15px",
    color: "white",
    textDecoration: "none",
  },
};

export default Header;
