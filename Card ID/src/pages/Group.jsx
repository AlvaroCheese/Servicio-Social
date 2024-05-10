import React, { useState } from "react";
import styles from "./Group.module.css";
import FrontCard from "./FrontCard.jsx";
import BackCard from "./BackCard.jsx";

const Group = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <main>
      <div className={styles.pexelsNicoleAvagliano270665Parent}>
        <div className={styles.pexelsNicoleAvagliano2706654} >
          <div className="h-screen centered">
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>

              {/* La cara frontal de la tarjeta */}
              <div className={styles.front}>
                <FrontCard />
                <button onClick={handleFlip} className={styles.botonFlip}></button>
              </div>

              {/* La cara trasera de la tarjeta */}
              <div className={styles.back}>
                <BackCard />
                <button onClick={handleFlip} className={styles.botonFlip}></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Group;