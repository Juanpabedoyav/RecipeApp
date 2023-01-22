import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from 'components/Header'
// import AppContext from "context/AppContext";
// import useGetData from "hooks/useGetData";
import { Home } from 'container/Home'
import { Footer } from 'components/Footer'

export const AppRouter = () => {


  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}