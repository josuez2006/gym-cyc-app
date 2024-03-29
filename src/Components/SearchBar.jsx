import { Link } from 'react-router-dom'

function SearchBar() {
  return (
    <Link className="search-bar section">
        <img src="./assets/icons/MagnifyingGlass.svg" alt="" />
        <span>Buscar socios registrados</span>
    </Link>
  )
}

export default SearchBar