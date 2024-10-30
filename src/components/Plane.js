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
            <h2>București → Palma de Mallorca</h2>
            <span>Dus-întors • Clasa Economic</span>
            <div className={styles.price}>până la 199€*</div>
            <small>*Prețul final variază în funcție de date și opțiuni</small>
            <p className={styles.description}>
              Descoperă magia Mallorcăi când dorești tu. Cu date flexibile de
              plecare și multiple opțiuni de zbor, îți poți planifica vacanța
              perfectă la Mediterană. Prețul include tariful de bază - bagajul
              de cală și selectarea locului sunt disponibile contra cost.
            </p>
          </div>

          <div className={styles.flightDetails}>
            <div className={styles.outbound}>
              <h3>Exemple Zboruri Dus</h3>
              <div className={styles.time}>Mai multe ore disponibile</div>
              <div>Diverse companii • ~3h durată zbor</div>
              <div>OTP–PMI • Zboruri directe disponibile</div>
            </div>

            <div className={styles.return}>
              <h3>Exemple Zboruri Întors</h3>
              <div className={styles.time}>Mai multe ore disponibile</div>
              <div>Diverse companii • ~3h durată zbor</div>
              <div>PMI–OTP • Zboruri directe disponibile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plane;
