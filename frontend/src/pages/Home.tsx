import React from "react";

const containerStyle: React.CSSProperties = {
  paddingTop: "40px",
};

const headingStyle: React.CSSProperties = {
  fontSize: "32px",
  marginBottom: "16px",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "18px",
  color: "#475569",
};

const Home: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Welcome to The NRI Diary</h2>
      <p style={paragraphStyle}>
        Stories of global Indians shaping the world through culture,
        innovation, and leadership.
      </p>
    </div>
  );
};

export default Home;