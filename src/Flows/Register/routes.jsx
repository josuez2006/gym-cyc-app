import { Route, Routes } from "react-router";
import Promo from './Promo'
import Name from './Name'
import Phone from './Phone'

function Register() {
  return (
    <Routes>
        <Route path="/socios/nuevo">
          <Route index element={<Promo />} />
          <Route path="nombre" element={<Name />} />
          <Route path="telefono" element={<Phone />} />
        </Route>
    </Routes>
  )
}

export default Register