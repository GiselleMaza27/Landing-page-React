import React from 'react'
import imagen1 from '../assets/img1.png';
import imagen2 from '../assets/img2.gif';
import imagen3 from '../assets/img3.avif';

import '../css/carousel.css'



const Carousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={imagen1} className="d-block w-100 img-fluid" alt="paginita"/>
      </div>
      <div className="carousel-item">
        <img src={imagen2} className="d-block w-100 img-fluid" alt="paginita"/>
      </div>
      <div className="carousel-item">
        <img src={imagen3} className="d-block w-100 img-fluid" alt="paginita"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel