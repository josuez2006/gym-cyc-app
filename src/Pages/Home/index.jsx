import Header from "./Header"
import Navbar from "../../Components/Navbar"
import SearchBar from "../../Components/SearchBar"
import Transactions from "./Transactions"
import Registering from "./Registering"
import PayingTheDay from "./PayingTheDay"

function Home() {
  return (
    <>
        <div className="page | vertical-frame gap-32">
            <Header />
            <SearchBar />
            <Registering />
            <PayingTheDay />
        </div>
        <Navbar isHomeActive="true"/>
    </>
  )
}

export default Home