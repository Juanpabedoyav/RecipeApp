import { Banner } from "components/Banner"
import { Categories } from "components/Categories"
import { Recipes } from "components/Recipes"
import useGetData from "hooks/useGetData"
import AppContext from "context/AppContext"
const API_KEY = '416646346e7c484e94ac76155d0542f4';

export const Home = () => {
  const data = useGetData(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=4`)

  return (
    <>
      <AppContext.Provider value={data}>
        <Banner />
        <Categories />
        <Recipes />
      </AppContext.Provider>
    </>
  )
}
