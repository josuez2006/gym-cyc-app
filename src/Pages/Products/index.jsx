import React from 'react'
import Navbar from '../../Components/Navbar'

function Products() {
  return (
    <>
      <div className="page vertical-frame gap-32">
        <h1 className="heading">Productos</h1>

        <div className="vertical-frame gap-24">
          <input className='search-bar' placeholder='Buscar productos'/>

          <div className="frame gap-12">
            <div className='tag' aria-current="true">Todos</div>
            <div className='tag' aria-current="false">Suplementos</div>
            <div className='tag' aria-current="false">Bebidas</div>
          </div>
        </div>

        <div>
          <div>
            <img src="" className='rounded'/>
          </div>
        </div>

      </div>
      <Navbar isProductsActive='true'/>
    </>
  )
}

export default Products