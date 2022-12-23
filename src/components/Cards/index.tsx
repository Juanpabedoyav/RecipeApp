import styles from "styles/Card.module.scss";
import start from "assets/icons/ic_star.svg";
import like from "assets/icons/ic-favorite.svg";
import time from "assets/icons/ic_time.svg";
import portion from "assets/icons/ic_portion.svg";
import chef from "assets/icons/ic_chef.svg";


import { useContext, useEffect, useState } from "react";
import { information } from "api/recipeInformation";
import axios from "axios";
import AppContext from "context/AppContext";
import useGetData from "hooks/useGetData";

interface CardsProps {
    title: string
    subtitle: string
    img: string
    id?: string
}

const API_KEY = '0d0cb7c0f9b84805b5e91472c3db9a96';
export const Cards = ({ title, subtitle, img, id }: CardsProps) => {


    const [isHover, setIsHover] = useState<Boolean>(false);


    const data = useGetData(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
    console.log(data)


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
                                    <p>5.1</p>
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
