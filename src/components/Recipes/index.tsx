import styles from "styles/Card.module.scss";
import { Cards } from "components/Cards";
import AppContext from "context/AppContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CardHover } from "components/CardHover";


const API_KEY = '416646346e7c484e94ac76155d0542f4';

interface CardProps {
  sourceName: string
  dishTypes:[] | string
  readyInMinutes: number
  servings:number
  image: string
  id?: number
}
interface HoverProps {
  sourceName: string
  image: string
  id:number
}

export const Recipes = () => {
  const data = useContext(AppContext)
  const [results, setResults] = useState<any | null >();

  const getData = async (id: number) => {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
      return response.data;
  };

  const fetchInformationRecipe = async () => {
      const infoRecipe = await Promise.all(data.map((obj: HoverProps) => getData(obj.id)));
      setResults(infoRecipe);
  };

  useEffect(() => {
      fetchInformationRecipe();

  }, []);

  return (
    <>
      <h1 className={styles['recipes-title']}>Nuevas Recetas</h1>
      <section className={styles['card-list']}>
        {

             results.map((plate: CardProps) => {
            return (
              <Cards key={plate.id} sourceName={plate.sourceName} dishTypes={plate.dishTypes[0]} image={plate.image}  children={<CardHover porcion={plate.servings} time={plate.readyInMinutes} level={'Díficil'} />}/>

            )
          })
      
        }
      </section>

    </>
  )
}
