import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} The NRI Diary. All rights reserved.
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "50px",
    padding: "20px",
    textAlign: "center" as const,
    backgroundColor: "#0f172a",
    color: "white",
  },
};

export default Footer;
