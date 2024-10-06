import React from "react";
import "./Streaming.css";
import NasaTv from "../components/NasaTv";

const StreamingPlatforms = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ paddingTop: 40, marginBottom: 20 }}>
        <h2
          style={{
            fontWeight: "900",
            fontSize: 40,
            letterSpacing: "2px",
            textAlign: "center",
            color: "rgb(208, 0, 228)",
            background: "linear-gradient(90deg, gray, lightgray)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Available Streaming Platforms
        </h2>
      </div>
      <p
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "white",
          marginTop: 20,
        }}
      >
        Orbit Tracker
      </p>
      <div className="">
        <NasaTv url={"https://www.nasa.gov/live/"} />
        <NasaTv
          url={
            "https://www.nasa.gov/general/nasa-embraces-streaming-service-to-reach-inspire-artemis-generation/"
          }

        />
        <NasaTv url={"https://www.n2yo.com/space-station/"} />

      </div>
    </div>
  );
};

export default StreamingPlatforms;
