import { Banner } from "components/Banner"
import { Categories } from "components/Categories"
import { Recipes } from "components/Recipes"
import useGetData from "hooks/useGetData"
import AppContext from "context/AppContext"

const API_KEY : string | undefined = process.env.REACT_APP_API_KEY
export const Home = () => {
  const data = useGetData(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=8`)

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
