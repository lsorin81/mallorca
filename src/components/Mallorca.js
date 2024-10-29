import React from "react";
import styles from "./Plane.module.css";
import VideoBackground from "./VideoBackground";

function Mallorca() {
  const videoSrc = `${process.env.PUBLIC_URL}/videos/mallorca.mp4`;
  return (
    <div className={styles.container}>
      <VideoBackground videoSrc={videoSrc} />
      <div className={styles.content}>
        <div className={styles.flightInfo}>
          <div className={styles.route}>
            <h2>Mallorca, Spania 🇪🇸</h2>
            <span>Vacanță de vis • 2024</span>
            <div className={styles.price}>7 Zile</div>
            <small>Pachete complete disponibile</small>
            <p className={styles.description}>
              Descoperă Mallorca direct din România. Cu zboruri regulate din
              București și Cluj-Napoca, paradisul mediteranean este mai aproape
              ca niciodată de românii dornici de aventură.
            </p>
          </div>

          <div className={styles.flightDetails}>
            <div className={styles.outbound}>
              <h3>Plaje de Vis</h3>
              <div className={styles.time}>Cala Agulla • Playa de Palma</div>
              <div>Es Trenc • Cala Mesquida</div>
              <div>Peste 260 plaje de explorat</div>
            </div>

            <div className={styles.return}>
              <h3>Experiențe Autentice</h3>
              <div className={styles.time}>Serra de Tramuntana</div>
              <div>Catedrale • Castele medievale</div>
              <div>Gastronomie locală</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mallorca;
