import styles from "styles/Card.module.scss";
import start from 'assets/icons/ic_star.svg'
import like from 'assets/icons/ic-favorite.svg'

interface CardsProps{
    title: string
    subtitle: string
    img : string
    rate : number
}

export const Cards = ({title, subtitle ,img , rate}: CardsProps) => {
  
  
  
    return (
    <>
    <div className={styles.Card}>
    <div className={styles['card-detail']}>
      <img src={img} alt={title + subtitle} />
      <p>{title} <small>{subtitle}</small></p>
    </div>
    <div className={styles.Icons}>
      <div className={styles['icons-start']}>
        <img src={start} alt="favorite start" />
        <p>{rate}</p>
      </div>
      <img src={like} alt="like" />
    </div>
  </div>
    </>
  )
}
