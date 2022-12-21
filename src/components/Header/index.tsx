// import { Link } from 'react-router-dom'
import styles from "styles/Header.module.scss";
import homeLogo from "assets/icons/ic_home.svg";
import logoCompany from "assets/logo.png";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <a href="">
          <figure>
            <img src={logoCompany} alt="back to home" />
          </figure>
        </a>
        <a href="">
          <img src={homeLogo} alt="back to home" />
        </a>
      </nav>
    </header>
  );
};
