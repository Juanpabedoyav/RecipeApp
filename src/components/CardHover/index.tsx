import styles from 'styles/Card.module.scss'
import timeLogo from 'assets/icons/ic_time.svg'
import portion from 'assets/icons/ic_portion.svg'
import chef from 'assets/icons/ic_chef.svg'

interface CardHoverProps{
    porcion: number
    time: number
    level: string

}
export const CardHover = ({porcion , time , level}: CardHoverProps) => {
  return (
    <div className={styles['card-detail--hover']}>
      <ul className={styles['card-list--hover']}>
        <li className={styles['card-description--hover']}>
          <img src={portion} alt="cantidad de porciones" />
          <p className={styles['card--option']}>Tamaño de la porción</p>
          {
            porcion > 1 ?
              <span>{porcion} raciones</span>
              :
              <span>{porcion} racion</span>

          }
        </li>
        <li className={styles['card-description--hover']}>

          <img src={timeLogo} alt="tiempo de preparacion" />
          <p className={styles['card--option']}> Tiempo de preparación</p>
          <span>{time} Minutos</span>
        </li>
        <li className={styles['card-description--hover']}>
          <img src={chef} alt="" />
          <p className={styles['card--option']}> Dificultad</p>
          <span>{level}</span>
        </li>
      </ul>
    </div>
  )
}
