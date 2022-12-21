import styles from "styles/Banner.module.scss";
import banner from "assets/bcq.jpg";

export const Banner = () => {
  return (
    <div className={styles.Banner}>
      <img src={banner} alt="" />
      <div className={styles.Presentation}>
        <p>Recetas</p>
        <p>Para todos</p>
      </div>
    </div>
  );
};
