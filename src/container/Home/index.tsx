import { Banner } from "components/Banner"
import { Categories } from "components/Categories"
import { Recipes } from "components/Recipes"
import useGetData from "hooks/useGetData"
import AppContext from "context/AppContext"

const API_KEY = '0d0cb7c0f9b84805b5e91472c3db9a96';

export const Home = () => {
  const data = useGetData(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=2`)

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
