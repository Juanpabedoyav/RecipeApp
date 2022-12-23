import styles from "styles/Card.module.scss";
import { Cards } from "components/Cards";
import AppContext from "context/AppContext";
import { useContext } from "react";


interface Recipe {
  title: string
  subtitle: string
  image: string
  
}
export const Recipes = () => {
  const data = useContext(AppContext)

  return (
    <>
      <h1 className={styles['recipes-title']}>Nuevas Recetas</h1>
      <section className={styles['card-list']}>
        {

          data.length > 0 ? data.map((plate: Recipe) => {
            return (
              <Cards title={plate.title.substring(0, 8)} subtitle={plate.title.substring(8, plate.title.length)} img={plate.image} />

            )
          })
            : 'Loading ...'
        }
      </section>

    </>
  )
}
