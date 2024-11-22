import React from "react";
import styles from "./Plane.module.css";

function Hotel() {
  const hotel1 = `${process.env.PUBLIC_URL}/hotel_1.jpg`;
  const hotel2 = `${process.env.PUBLIC_URL}/hotel_2.jpg`;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hotelsContainer}>
          <div
            className={styles.hotelCard}
            style={{
              backgroundImage: `url(${hotel1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          >
            <div className={styles.textOverlay}>
              <h2>Hotel Rey Don Jaime</h2>
              <span>Camera dubla • Standard</span>
              <div className={styles.price}>502.50 EUR</div>
              <small>per persoana</small>

              <div className={styles.hotelDetails}>
                <h3>Perioada turneu • 15-19 Mai</h3>
                <div>331.50 EUR - cazare turneu</div>
                <div>21 EUR - taxa turneu</div>
                <div>151 EUR - 2 nopți extra</div>
                <div>Demipensiune inclusă</div>
              </div>
              <div className={styles.paymentInfo}>
                <p>
                  <strong>PS:</strong> Avans minim 121 EUR (100 hotel + 21 taxa
                  turneu). Plata integrală până în martie 2025.
                </p>
              </div>
            </div>
          </div>

          <div
            className={styles.hotelCard}
            style={{
              backgroundImage: `url(${hotel2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          >
            <div className={styles.textOverlay}>
              <h2>Hotel H10</h2>
              <span>Camera dubla • Standard</span>
              <div className={styles.price}>527 EUR</div>
              <small>per persoana</small>
              <div className={styles.hotelDetails}>
                <h3>Perioada turneu • 15-19 Mai</h3>
                <div>347 EUR - cazare turneu</div>
                <div>21 EUR - taxa turneu</div>
                <div>159 EUR - 2 nopți extra</div>
                <div>Demipensiune inclusă</div>
              </div>
              <div className={styles.paymentInfo}>
                <p>
                  <strong>PS:</strong> Avans minim 121 EUR (100 hotel + 21 taxa
                  turneu). Plata integrală până în martie 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
