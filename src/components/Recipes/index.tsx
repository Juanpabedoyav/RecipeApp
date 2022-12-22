import styles from "styles/Card.module.scss";
import ojingeo5 from 'assets/Ojingeo-muchim-5.png'
import ojingeo1 from 'assets/Ojingeo-muchim-1.png'
import ojingeo from 'assets/Ojingeo-muchim.png'
import cherry from 'assets/cherry.png'
import start from 'assets/icons/ic_star.svg'
import like from 'assets/icons/ic-favorite.svg'

export const Recipes = () => {
  return (
    <>
      <h1 className={styles['recipes-title']}>Nuevas Recetas</h1>
      <section className={styles['card-list']}>
        <div className={styles.Card}>
          <div className={styles['card-detail']}>
            <img src={ojingeo5} alt="" />
            <p>Ojingeo <small>Muchim</small></p>
          </div>
          <div className={styles.Icons}>
            <div className={styles['icons-start']}>
              <img src={start} alt="favorite start" />
              <p>5.0</p>
            </div>
            <img src={like} alt="like" />
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles['card-detail']}>
            <img src={ojingeo1} alt="" />
            <p>Ojingeo <small>Muchim</small></p>
          </div>
          <div className={styles.Icons}>
            <div className={styles['icons-start']}>
              <img src={start} alt="favorite start" />
              <p>5.0</p>
            </div>
            <img src={like} alt="like" />
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles['card-detail']}>
            <img src={ojingeo} alt="" />
            <p>Ojingeo <small>Muchim</small></p>
          </div>
          <div className={styles.Icons}>
            <div className={styles['icons-start']}>
              <img src={start} alt="favorite start" />
              <p>5.0</p>
            </div>
            <img src={like} alt="like" />
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles['card-detail']}>
            <img src={cherry} alt="" />
            <p>Ojingeo <small>Muchim</small></p>
          </div>
          <div className={styles.Icons}>
            <div className={styles['icons-start']}>
              <img src={start} alt="favorite start" />
              <p>5.0</p>
            </div>
            <img src={like} alt="like" />
          </div>
        </div>

      </section>

    </>
  )
}
