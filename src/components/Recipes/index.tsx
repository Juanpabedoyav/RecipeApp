import styles from "styles/Card.module.scss";
import ojingeo5 from 'assets/Ojingeo-muchim-5.png'
import ojingeo1 from 'assets/Ojingeo-muchim-1.png'
import ojingeo from 'assets/Ojingeo-muchim.png'
import cherry from 'assets/cherry.png'
import { Cards } from "components/Cards";

export const Recipes = () => {
  return (
    <>
      <h1 className={styles['recipes-title']}>Nuevas Recetas</h1>
      <section className={styles['card-list']}>
       
      <Cards title="Ojingeo" subtitle="Muchim" img={ojingeo5} rate={5.1}/>
      <Cards title="Cola" subtitle="Chicken" img={ojingeo1} rate={5.1}/>
      <Cards title="Roasted" subtitle="Carrot" img={ojingeo} rate={5.1}/>
      <Cards title="Sweet" subtitle="Cherries" img={cherry} rate={4.1}/>
     

      </section>

    </>
  )
}
