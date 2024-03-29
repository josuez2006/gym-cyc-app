import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Stadistics from "./Pages/Stadistics";
import Register from "./Pages/Register";
import './styles/main.scss'
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<Products />} path="/productos"/>
        <Route element={<Stadistics />} path="/estadísticas"/>
        <Route element={<Register />} path="/socios/nuevo"/>
        {/* <Route element={} path="/productos"/> */}
      </Routes>
    </>
    
  );
}

export default App;
