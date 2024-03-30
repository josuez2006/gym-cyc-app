import { Link } from "react-router-dom"

function TopBar({currentLocation, previousLocation}) {
  return (
    <header className="frame gap-8 y-centered">
        <Link to={previousLocation}>
        <img src="../../assets/icons/Back.svg" alt="" />
        </Link>
        <span className="heading">{currentLocation}</span>
    </header>

  )
}

export default TopBar