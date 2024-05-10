import React, { useState } from "react";
import styles from "./Group.module.css";
import FrontCard from "./FrontCard.jsx";
import BackCard from "./BackCard.jsx";

const Group = () => {
  const [activeCard, setActiveCard] = useState(false);

  const handleFlip = () => {
    setActiveCard(!activeCard);
  };

  return (
    <main>
      <div className={styles.pexelsNicoleAvagliano270665Parent}>
        <div className={styles.pexelsNicoleAvagliano2706654} />
        <div className="h-screen centered">
          <div className={`relative card ${activeCard ? styles.cardFlip : ""}`}>
            <div className={`absolute w-full h-full front`} style={{ opacity: activeCard ? 0 : 1, visibility: activeCard ? "hidden" : "visible" }}>
              <FrontCard />
            </div>
            <div className={`absolute w-full h-full back`} style={{ opacity: activeCard ? 1 : 0, visibility: activeCard ? "visible" : "hidden" }}>
              <BackCard />
            </div>
          </div>
          <button onClick={handleFlip} className={styles.botonFlip}></button>
        </div>
      </div>
    </main>
  );
};

export default Group;
