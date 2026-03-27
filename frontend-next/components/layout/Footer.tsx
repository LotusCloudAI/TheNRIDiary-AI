"use client";

import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* LEFT */}
        <div style={styles.left}>
          <h3 style={styles.logo}>The NRI Diary</h3>
          <p style={styles.tagline}>
            Stories. Community. Opportunities.
          </p>
        </div>

        {/* CENTER NAV */}
        <div style={styles.nav}>
          <span onClick={() => router.push("/")}>Home</span>
          <span onClick={() => router.push("/category/usa")}>USA</span>
          <span onClick={() => router.push("/category/india")}>India</span>
          <span onClick={() => router.push("/category/h1b")}>H1B</span>
          <span onClick={() => router.push("/category/jobs")}>Jobs</span>
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <p>© {new Date().getFullYear()} The NRI Diary</p>
        </div>

      </div>
    </footer>
  );
}

// =========================
// STYLES (PRODUCTION)
// =========================

const styles: any = {
  footer: {
    width: "100%",
    backgroundColor: "#111",
    color: "#fff",
    marginTop: "40px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "25px 15px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap", // ✅ mobile responsive
    gap: "20px",
  },

  left: {
    minWidth: "200px",
  },

  logo: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "5px",
  },

  tagline: {
    fontSize: "13px",
    color: "#bbb",
  },

  nav: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    fontSize: "14px",
    cursor: "pointer",
  },

  right: {
    fontSize: "12px",
    color: "#bbb",
  },
};