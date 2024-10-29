import React from "react";
import styles from "./Plane.module.css";
import VideoBackground from "./VideoBackground";

function Plane() {
  const videoSrc = `${process.env.PUBLIC_URL}/videos/plane.mp4`;

  return (
    <div className={styles.container}>
      <VideoBackground videoSrc={videoSrc} />
      <div className={styles.content}>
        <div className={styles.flightInfo}>
          <div className={styles.route}>
            <h2>București → Palma</h2>
            <span>Dus-întors • Clasa Economic</span>
            <div className={styles.price}>904 RON</div>
            <small>Cel mai mic preț total</small>
            <p className={styles.description}>
              Ia-ți o săptămână întreagă pentru a descoperi magia Mallorcăi. De
              la plaje imaculate până la golfuri ascunse, vei avea nevoie de
              toate cele 7 zile pentru a experimenta cu adevărat acest paradis
              mediteranean.
            </p>
          </div>

          <div className={styles.flightDetails}>
            <div className={styles.outbound}>
              <h3>Plecare • Dum, 11 Mai</h3>
              <div className={styles.time}>10:35 – 12:50</div>
              <div>Ryanair • 3 ore 15 min</div>
              <div>OTP–PMI • Zbor direct</div>
            </div>

            <div className={styles.return}>
              <h3>Întoarcere • Dum, 18 Mai</h3>
              <div className={styles.time}>06:05 – 10:10</div>
              <div>Ryanair 3 ore 5 min</div>
              <div>PMI–OTP • Zbor direct</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plane;
