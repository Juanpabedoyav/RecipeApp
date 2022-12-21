import { Link } from 'react-router-dom'
import styles from 'styles/Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.Header}>
        <nav>
            <ul>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <Link to={'/'}/>
                </li>
            </ul>
        </nav>
        
        </header>
  )
}
