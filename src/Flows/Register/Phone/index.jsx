import TopBar from "../../../Components/TopBar"
import { Link } from 'react-router-dom'

function RegisterName() {
  return (
    <div className="page">
        <TopBar currentLocation="Socios nuevos" previousLocation="/"/>
        <div>
            <div className="title">Nombre completo</div>
            <input type="text" placeholder="Escribí el nombre completo" />
        </div>
        <Link to='/socios/nuevo/telefono'><button className="btn primary-btn">Confirmar nombre</button></Link>

    </div>
  )
}

export default RegisterName