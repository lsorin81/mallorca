import React from "react";
import styles from "./Plane.module.css";

function VideoBackground({ videoSrc }) {
  return (
    <video className={styles.videoBackground} autoPlay loop muted playsInline>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoBackground;
