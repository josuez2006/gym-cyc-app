import { Link } from "react-router-dom"

function CardForRegistering() {
  return (
    <div className="vertical-frame gap-16">
        <h2 className="title">Socio nuevo</h2>
        <img src="./assets/imgs/NewMember.png" className="rounded fixed-img"/>
        <Link to='socios/nuevo'>
           <button className="btn">Regristralo</button>
        </Link>
    </div>
  )
}

export default CardForRegistering