import Header from "./Header"

function Register() {
  return (
    <div className="container full-screen register">
        <Header />

        <div className="content">
        <img src="../../assets/imgs/Promo.jpg" alt="" className="rounded"/>

        <div className="btns">
            <button className="btn secondary-btn">Usar promo 3x2</button>
            <button className="btn primary-btn">No usar promo</button>
        </div>

        </div>
    
    </div>
  )
}

export default Register