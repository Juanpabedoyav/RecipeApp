import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "components/Header";
import AppContext from "context/AppContext";
import useGetData from "hooks/useGetData";
import { Home } from "container/Home";
import { Footer } from "components/Footer";

export const AppRouter = () => {
const API_KEY = '0d0cb7c0f9b84805b5e91472c3db9a96';
const data = useGetData(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=4`)

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