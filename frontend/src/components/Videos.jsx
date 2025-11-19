import React from "react";

// Import videos from src/Assets/VIDEOS
import v1 from "../Assets/VIDEOS/KAYONI.mp4";
import v2 from "../Assets/VIDEOS/EMBROIDERY.mp4";
import v3 from "../Assets/VIDEOS/jerseys.mp4";

export default function Videos() {
  return (
    <section>
      <h2>Our Work (Videos)</h2>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <video width="400" controls src={v1}>
          Your browser does not support the video tag.
        </video>

        <video width="400" controls src={v2}>
          Your browser does not support the video tag.
        </video>

        <video width="400" controls autoPlay muted loop src={v3}>
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
