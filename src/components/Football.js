import React from "react";
import styles from "./Plane.module.css";
import VideoBackground from "./VideoBackground";

function Football() {
  const videoSrc = `${process.env.PUBLIC_URL}/videos/football.mp4`;

  return (
    <div className={styles.container}>
      <VideoBackground videoSrc={videoSrc} />
      <div className={styles.content}>
        <div className={styles.flightInfo}>
          <div className={styles.route}>
            <h2>Turneu de Fotbal 5 la 5</h2>
            <span>4 Jucători + 1 Portar • 3 Rezerve</span>
            <p className={styles.description}>
              Alătură-te turneului nostru intensiv de fotbal 5 la 5. Fiecare
              meci constă din 2 reprize a câte 10 minute. Echipele vor juca 6
              meciuri în faza grupelor înainte de a avansa în fazele
              eliminatorii.
            </p>
          </div>

          <div className={styles.flightDetails}>
            <div className={styles.outbound}>
              <h3>Faza Grupelor • Sâm, 11 Mai</h3>
              <div>6 Meciuri • 20 min fiecare</div>
              <div>Primele 2 echipe se califică</div>
            </div>

            <div className={styles.return}>
              <h3>Faza Eliminatorie • Sâm, 11 Mai</h3>
              <div>Semifinale & Finală</div>
              <div>Câștigătorul ia totul</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Football;
