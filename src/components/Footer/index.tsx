import footerLogo from 'assets/Grupo 7610.png'
import styles from 'styles/Footer.module.scss'
export const Footer = () => {
  return (
    <footer className={styles.Footer}>
        <ul className={styles['footer-list']}>
            <li>
                <p className={styles.Partner}>Con el Patrocinio de</p>
            </li>
            <li className={styles['footer-logo']}>
               <figure className={styles['footer-img']}>
                    <img src={footerLogo} alt="" />
                </figure> 
            </li>
        </ul>

    </footer>
  )
}
