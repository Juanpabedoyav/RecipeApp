import styles from "styles/Card.module.scss";
import start from "assets/icons/ic_star.svg";
import like from "assets/icons/ic-favorite.svg";
import time from "assets/icons/ic_time.svg";
import portion from "assets/icons/ic_portion.svg";
import chef from "assets/icons/ic_chef.svg";


import { useState } from "react";

interface CardsProps {
    title: string;
    subtitle: string;
    img: string;
    rate: number;
}

export const Cards = ({ title, subtitle, img, rate }: CardsProps) => {
    const [isHover, setIsHover] = useState<Boolean>(false);
    const [isHoverDetail, setIsHoverDetail] = useState<string>();

    const handleMouseOver = () => {
        setIsHover(true);
    };
    const handleMouseOut = () => {
        setIsHover(false);
    };
    return (
        <>
            <div
                className={styles.Card}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <div className={styles["card-detail"]}>
                    <img src={img} alt={title + subtitle} />
                </div>

                {isHover ? (
                    <>
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
                    </>
                )
                    : (
                        <>
                            <div className={styles["card-detail"]}>
                                <p>
                                    {title} <small>{subtitle}</small>
                                </p>
                            </div>
                            <div className={styles.Icons}>
                                <div className={styles["icons-start"]}>
                                    <img src={start} alt="favorite start" />
                                    <p>{rate}</p>
                                </div>
                                <img src={like} alt="like" />
                            </div>
                        </>
                    )
                }
            </div>
        </>
    );
};
