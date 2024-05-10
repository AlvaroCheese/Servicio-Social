import React from "react";
import styles from "./Group.module.css";

const FrontCard = () => {
  return (
    <div>
      <div className={styles.pexelsNicoleAvagliano270665}/>
      <div className={styles.rectangulo} />
      <img className={styles.grupoItem} alt="Rectangle" src="/rectangle-11@2x.png" />
      <div className={styles.rectangulo} />
      <div className={styles.Foto}>[Foto del Usuario]</div>
      <header className={styles.rectanguloHeader} />
      <main className={styles.rectangleMain} />
      <div className={styles.Info1}>Nombre</div>
      <div className={styles.Info2}>Fecha de Ingreso</div>
      <div className={styles.Fecha}>12 de Abril del 2024</div>
      <div className={styles.Organizacion}>United Federation of Science International</div>
      <div className={styles.Nombre}>Jorge Martínez Lozano</div>
      <section className={styles.rectanguloSection} />
      <div className={styles.Info3}>Descripción</div>
      <div className={styles.Descripcion}>
        Hola soy Jorge, estudié Ingeniería Bioquímica en la universidad de Palermo y estudié una maestría en España
      </div>
      <section className={styles.rectangulo1} />
      <div className={styles.Info4}>Rol</div>
      <div className={styles.Rol}>Gerente de experiencias</div>
      <section className={styles.rectangulo2} />
      <img className={styles.botonFlipp} alt="" src="/botonFlip.png"/>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <img className={styles.pexelsThisisengineering39125Icon} alt="" src="/pexelsthisisengineering3912513-1@2x.png" />
    </div>
  );
};

export default FrontCard;