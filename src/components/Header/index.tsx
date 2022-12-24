// import { Link } from 'react-router-dom'
import styles from "styles/Header.module.scss";
import homeLogo from "assets/icons/ic_home.svg";
import logoCompany from "assets/logo.png";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <a href="/">
          <figure>
            <img src={logoCompany} alt="back to home" />
          </figure>
        </a>
        <div className={styles.Links}>
          <a className={styles['links-item']} href="/">Home</a>
          <a className={styles['links-item']} href="/">Vegetarianos</a>
          <a className={styles['links-item']} href="/">Platos Principales</a>
          <a className={styles['links-item']} href="/">Tortas</a>
          <a className={styles['links-item']} href="/">Rápida</a>
          <a className={styles['links-item']} href="/">Menú Niños</a>
          <a className={styles['links-item']} href="/">Sopas</a>
        </div>
        <a className={styles['icon-home']} href="/">
          <img src={homeLogo} alt="back to home" />
        </a>
      </nav>
    </header>
  );
};
