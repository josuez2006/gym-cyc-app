import { Link } from "react-router-dom"
import TopBar from "../../../Components/TopBar"
import './index.scss'

function Register() {
  return (
    <div className="page-full-screen gap-32">
          <TopBar currentLocation="Socios nuevos" previousLocation="/"/>

        <div className="two-row-grid gap-64">
          <div className="promo-img"></div>

          <div className="vertical-frame gap-16">
              <button className="btn btn-secondary">Usar promo 3x2</button>
              <Link to='/socios/nuevo/nombre'>
                <button className="btn btn-primary">No usar promo</button>
              </Link>
          </div>
        </div>

    </div>
  )
}

export default Register