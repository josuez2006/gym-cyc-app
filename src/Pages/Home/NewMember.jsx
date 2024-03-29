import { Link } from "react-router-dom"

function NewMember() {
  return (
    <div className="card section">
        <h2 className="title">Socio nuevo</h2>
        <img src="./assets/imgs/NewMember.png" alt="" />
        <Link to='socios/nuevo'>
           <button className="btn">Regristralo</button>
        </Link>
    </div>
  )
}

export default NewMember