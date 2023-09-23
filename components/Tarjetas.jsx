import React from 'react'

const Tarjetas = ({item}) => {
  return (

    <div className="col-12 col-md">
     <div className="card mt-4 mb-3" >
     <div className="card-body text-center">
     <i className={`fa ${item.icono} fa-4x text-success`}></i>
     <p className="card-text">{item.texto1}</p>
     <p className="card-text">{item.texto2}</p>
     </div>
     </div>
    </div>

  )
}

export default Tarjetas