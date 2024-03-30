import { Route, Routes } from "react-router";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Stadistics from "./Pages/Stadistics";

import './styles/main.scss'

import Register from './Flows/Register/routes'


function App() {
  return (
    <>

      {/* Main pages */}

      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<Products />} path="/productos"/>
        <Route element={<Stadistics />} path="/estadísticas"/>
      </Routes>

      {/* Flows */}

      <Register />
    </>
    
  );
}

export default App;
