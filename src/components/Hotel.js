import React from "react";
import styles from "./Plane.module.css";
import VideoBackground from "./VideoBackground";

function Hotel() {
  const videoSrc = `${process.env.PUBLIC_URL}/videos/hotel.mp4`;
  return (
    <div className={styles.container}>
      <VideoBackground videoSrc={videoSrc} />
      <div className={styles.content}>
        <div className={styles.flightInfo}>
          <div className={styles.route}>
            <h2>Reverence Life Hotel</h2>
            <span>Camera dubla • Standard</span>
            <div className={styles.price}>332 EUR</div>
            <small>per persoana</small>
            <p className={styles.description}>
              Bucura-te de confortul unei camere moderne, perfect amenajata
              pentru o sedere relaxanta. Camera dubla standard ofera tot ce ai
              nevoie pentru un sejur placut.
            </p>
          </div>

          <div className={styles.flightDetails}>
            <div className={styles.outbound}>
              <h3>Check-in • Wed, 15 May</h3>
              <div className={styles.time}>După ora 14:00</div>
              <div>Camera dubla • Pat matrimonial</div>
              <div>Demipensiune (mic dejun și cină incluse)</div>
            </div>

            <div className={styles.return}>
              <h3>Check-out • Sat, 18 May</h3>
              <div className={styles.time}>Până la ora 12:00</div>
              <div>3 nopți cazare</div>
              <div>Anulare gratuită</div>
              <div>Posibilitate prelungire ședere cu încă 3 zile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
