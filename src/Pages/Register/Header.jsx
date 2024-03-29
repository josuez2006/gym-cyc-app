import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex y-centered">
        <Link to='/'>
        <img src="../../assets/icons/Back.svg" alt="" />
        </Link>
        <span className="heading">Socio nuevo</span>
    </header>

  )
}

export default Header