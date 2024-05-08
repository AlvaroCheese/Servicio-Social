import React, { useState } from "react";
import styles from "./Group.module.css"; // Importa los estilos

const Group = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <React.Fragment>
        <div className={styles.pexelsNicoleAvagliano270665Parent}>
            <div className={styles.pexelsNicoleAvagliano2706654} />
                <div className={`${styles.tarjeta} ${isFlipped ? styles.flipped : ""}`}>
                    {/* Front side */}
                    <div className={styles.pexelsNicoleAvagliano270665} />
                    <div className={styles.rectangulo} />
                    <img className={styles.grupoItem} alt="Rectangle" src="/rectangle-11@2x.png" />
                    <div className={styles.rectangulo} />
                    <div className={styles.fotoDelUsuario}>[Foto del Usuario]</div>
                    <header className={styles.rectanguloHeader} />
                    <main className={styles.rectangleMain} />
                    <img className={styles.botonFlip} alt="" src="/botonFlip.png" />
                    <div className={styles.nombre}>Nombre</div>
                    <div className={styles.fechaDeIngreso}>Fecha de Ingreso</div>
                    <div className={styles.deAbrilDel}>12 de Abril del 2024</div>
                    <div className={styles.unitedFederationOf}>United Federation of Science International</div>
                    <div className={styles.jorgeMartnezLozano}>Jorge Martínez Lozano</div>
                    <section className={styles.rectanguloSection} />
                    <div className={styles.descripcion}>Descripción</div>
                    <div className={styles.holaSoyJorge}>
                        Hola soy Jorge, estudié Ingeniería Bioquimica en la universidad de
                        palermo y estudié una maestría en España
                    </div>
                    <section className={styles.rectangulo1} />
                    <div className={styles.rol}>Rol</div>
                    <div className={styles.gerenteDeExperiencias}>Gerente de experiencias</div>
                    <section className={styles.rectangulo2} />
                    <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
                    <img className={styles.pexelsThisisengineering39125Icon} alt="" src="/pexelsthisisengineering3912513-1@2x.png" />
                </div>

                
                {/* Back side */}
                <div className={styles["tarjeta-parte-trasera"]}>
                    <div className={styles.pexelsNicoleAvagliano270665Icon}/>
                    <main className={styles.rectangulo3} />
                    <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
                    <button className={styles.rectangleButton} />
                    <button className={styles.copiarLink}>Copiar link</button>
                    <button className={styles.carrera}>Carrera</button>
                    <div className={styles.ingenieraMecnica}>Ingeniería Mecánica</div>
                    <div className={styles.proyecto}>Proyecto:</div>
                    <div className={styles.ecolife}>EcoLife</div>
                    <div className={styles.habilidades}>Habilidades:</div>
                    <div className={styles.diseoCADPythonContainer}>
                        <ul className={styles.diseoCADPythonImpresin3d}>
                            <li className={styles.diseoCAD}>Diseño CAD</li>
                            <li className={styles.diseoCAD}>Python</li>
                            <li className={styles.diseoCAD}>Impresión 3d</li>
                            <li>CNC</li>
                        </ul>
                    </div>
                </div>

            {/* Botón de flip */}
            <button className={`${styles.botonFlipp} ${isFlipped ? styles.flipped : ""}`} onClick={handleFlip}/>
        </div>
        </React.Fragment>
    );
};

export default Group;
