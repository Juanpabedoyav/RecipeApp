import { Banner } from "components/Banner"
import { Categories } from "components/Categories"
import { Recipes } from "components/Recipes"
import useGetData from "hooks/useGetData"
import AppContext from "context/AppContext"
const API_KEY = '52047e52f4024a94a714868302478f54';

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
