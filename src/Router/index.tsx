import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContext from "../Context/AppContext";
import useGetData from "../Hooks/useGetData";

export const AppRouter = () => {
const data = useGetData('https://api.spoonacular.com/recipes/complexSearch?apiKey=6439f97c50ed47cfaffd620b73f4b898')


    return (
      <>
      <AppContext.Provider value={data}>

        <BrowserRouter>
          <Routes>
              <Route path="/" />
             
  
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
      </>
    );
  };