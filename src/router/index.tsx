import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "components/Header";
import AppContext from "context/AppContext";
import useGetData from "hooks/useGetData";
import { Home } from "container/Home";
import { Footer } from "components/Footer";

export const AppRouter = () => {
const data = useGetData('https://api.spoonacular.com/recipes/complexSearch?apiKey=6439f97c50ed47cfaffd620b73f4b898')


    return (
      <>
      <AppContext.Provider value={data}>
        <Header />
         <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </AppContext.Provider>
      </>
    );
  };