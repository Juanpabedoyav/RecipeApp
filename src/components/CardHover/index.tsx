import styles from "styles/Card.module.scss";
import time from "assets/icons/ic_time.svg";
import portion from "assets/icons/ic_portion.svg";
import chef from "assets/icons/ic_chef.svg";


export const CardHover = () => {
    return (
        <div className={styles["card-detail--hover"]}>
            <ul className={styles["card-list--hover"]}>
                <li className={styles["card-description--hover"]}>
                    <img src={portion} alt="cantidad de porciones" />
                    <p className={styles["card--option"]}>Tamaño de la porción</p>
                    <span>4 raciones</span>
                </li>
                <li className={styles["card-description--hover"]}>

                    <img src={time} alt="tiempo de preparacion" />
                    <p className={styles["card--option"]}> Tiempo de preparación</p>
                    <span>10 minutos</span>
                </li>
                <li className={styles["card-description--hover"]}>
                    <img src={chef} alt="" />
                    <p className={styles["card--option"]}> Dificultad</p>
                    <span>fácil</span>
                </li>
            </ul>
        </div>
    )
}
