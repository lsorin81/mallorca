import React, { useState } from "react";
import styles from "./App.module.css";
import Plane from "./components/Plane";
import Hotel from "./components/Hotel";
import Football from "./components/Football";
import Mallorca from "./components/Mallorca";

function App() {
  const [activeTab, setActiveTab] = useState("Avion");
  const tabs = ["Avion", "Hotel", "Fotbal", "Mallorca"];

  const renderContent = () => {
    switch (activeTab) {
      case "Avion":
        return <Plane />;
      case "Hotel":
        return <Hotel />;
      case "Fotbal":
        return <Football />;
      case "Mallorca":
        return <Mallorca />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.App}>
      <nav className={styles.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${
              activeTab === tab ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      {renderContent()}
    </div>
  );
}

export default App;
