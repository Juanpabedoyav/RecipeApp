import styles from 'styles/Categories.module.scss'
import vegetarian from 'assets/icons/ic_vegetarian.svg'
import fastFood from 'assets/icons/ic_fast-food.svg'
import kids from 'assets/icons/ic_kids.svg'
import soup from 'assets/icons/ic_soup.svg'
import cake from 'assets/icons/ic_cake.svg'
import main from 'assets/icons/ic_main.svg'






export const Categories = () => {
  return (
    <div className={styles.Categories}>

      <ul className={styles['list-categories']}>
        <li>
          <img src={vegetarian} alt={''} />
          <h4>Vegetarianos</h4>
        </li>
        <li>
          <img src={main} alt={''} />
          <h4>Principales</h4>
        </li>
        <li>
          <img src={cake} alt={''} />
          <h4>Tortas</h4>
        </li>
        <li>
          <img src={fastFood} alt={''} />
          <h4>Rápida</h4>
        </li>
        <li>
          <img src={kids} alt={''} />
          <h4>Menú Niños</h4>
        </li>
        <li>
          <img src={soup} alt={''} />
          <h4>Sopas</h4>
        </li>

      </ul>


    </div>
  )
}
