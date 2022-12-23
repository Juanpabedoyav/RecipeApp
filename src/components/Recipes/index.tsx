import styles from "styles/Card.module.scss";
import { Cards } from "components/Cards";
import AppContext from "context/AppContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CardHover } from "components/CardHover";


const API_KEY = '0d0cb7c0f9b84805b5e91472c3db9a96';

interface CardState {
  sourceName: string
  dishTypes: [] | string
  image: string
  readyInMinutes: number
  servings: number
  id?: number
}


export const Recipes = () => {
  const data = useContext(AppContext)
  const [results, setResults] = useState<Array<CardState>>();




  useEffect(() => {
    const getData = async () => {
      let allData = []
      let ids = data.map((elem) => elem['id'])
      for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        allData.push(response.data)
      }
      setResults(allData)
    }
    getData()

  }, [data]);
if(results?.length === 0) return <>Cargando...</>
  return (
    <>
      <h1 className={styles['recipes-title']}>Nuevas Recetas</h1>
      <section className={styles['card-list']}>

        {
          results ? results.map((plate) => {
            return (
              <Cards key={plate.id} sourceName={plate.sourceName} image={plate.image} dishTypes={plate.dishTypes} children={<CardHover porcion={plate.servings} time={plate.readyInMinutes} level={'Díficil'} />} />
            )

          })
          : 'Cargando...'
        }

      </section>

    </>
  )
}
