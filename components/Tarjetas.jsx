import React from 'react'

const Tarjetas = ({item}) => {
  return (

    <div className="col-12 col-md">
     <div className="card" style="width: 18rem;">
     <div className="card-body">
     {/* <i className={`fa ${item.icono} fa-4x`}></i> */}
     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     </div>
     </div>
    </div>

  )
}

export default Tarjetas