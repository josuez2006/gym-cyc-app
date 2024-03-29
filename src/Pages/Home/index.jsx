import Header from "../../Components/Header"
import Navbar from "../../Components/Navbar"
import SearchBar from "../../Components/SearchBar"
import CashTransactions from "./CashTransactions"
import NewMember from "./NewMember"
import Stranger from "./Stranger"

function Home() {
  return (
    <>
        <div className="container">
          <Header />
          <CashTransactions />
          <SearchBar />
          <NewMember />
          <Stranger />
        </div>
        <Navbar isHomeActive="true"/>
    </>
  )
}

export default Home