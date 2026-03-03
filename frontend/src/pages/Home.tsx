import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <section style={styles.hero}>
        <h1>Welcome to The NRI Diary</h1>
        <p>Stories, experiences, and journeys of NRIs around the world.</p>
      </section>

      <section style={styles.section}>
        <h2>Latest Stories</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>Story 1</div>
          <div style={styles.card}>Story 2</div>
          <div style={styles.card}>Story 3</div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    padding: "40px",
    backgroundColor: "#8888a2",
    textAlign: "center" as const,
  },
  section: {
    marginTop: "40px",
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
  },
  card: {
    padding: "20px",
    backgroundColor: "#514e68",
    flex: 1,
  },
};

export default Home;
