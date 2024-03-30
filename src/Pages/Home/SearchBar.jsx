import { Link } from 'react-router-dom'

function SearchBar() {
  return (
    <Link className="search-bar frame y-centered" to='socios/buscador'>
        Buscar socios registrados
    </Link>
  )
}

export default SearchBar