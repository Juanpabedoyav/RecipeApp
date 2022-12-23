import styles from "styles/Card.module.scss";
import start from "assets/icons/ic_star.svg";
import like from "assets/icons/ic-favorite.svg";
import time from "assets/icons/ic_time.svg";
import portion from "assets/icons/ic_portion.svg";
import chef from "assets/icons/ic_chef.svg";


import { useState } from "react";

interface CardsProps {
    sourceName: string
    image: string
    children: JSX.Element
}


export const Cards = ({ sourceName, image, children }: CardsProps) => {


    const [isHover, setIsHover] = useState<Boolean>(false);



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
                    <img src={image} alt={sourceName} />
                </div>

                {isHover ? (
                    <>
                        {children}

                    </>
                )
                    : (
                        <>
                            <div className={styles["card-detail"]}>
                                <p>
                                    {sourceName} <small>{sourceName.substring(6, sourceName.length)}</small>
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
