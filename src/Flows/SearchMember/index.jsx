import TopBar from "../../Components/TopBar"

function SearchMember() {
  return (
    <div className="page gap-32">
      <TopBar currentLocation="Buscando socio" previousLocation="/"/>
      <form>
        <input className="search-bar" autoFocus type="text" placeholder="Buscar socio registrado" />
      </form>
    </div>
  )
}

export default SearchMember