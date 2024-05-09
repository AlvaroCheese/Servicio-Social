import React from "react";
import styles from "./Group.module.css";

const BackCard = () => {
  return (
    <div className={`${styles.back} ${styles.card}`}>
      <div className={styles.pexelsNicoleAvagliano270665Icon} />
      <main className={styles.rectangulo3} />
      <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      <button className={styles.rectangleButton} />
      <button className={styles.Copiar}>Copiar link</button>
      <button className={styles.Estudio}>Carrera</button>
      <div className={styles.Carrera}>Ingeniería Mecánica</div>
      <div className={styles.Proyecto}>Proyecto:</div>
      <div className={styles.NomProyecto}>EcoLife</div>
      <div className={styles.Habilidades}>Habilidades:</div>
      <div className={styles.Listado}>
        <ul className={styles.Conocimientos}>
          <li className={styles.Cono}>Diseño CAD</li>
          <li className={styles.Cono}>Python</li>
          <li className={styles.Cono}>Impresión 3d</li>
          <li claseName={styles.Cono}>CNC</li>
        </ul>
      </div>
    </div>
  );
};

export default BackCard;
