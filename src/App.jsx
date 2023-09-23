// import { Carousel } from 'bootstrap'
import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Tarjetas from '../components/Tarjetas';
import { infoTarjetas } from '../data/info';


const App = () => {
  return (
   <div>
    <Navbar/>
    <Carousel/>
    <div className="container">
      <div className="row">

        { infoTarjetas.map((item,index)=>(

          <Tarjetas key={index} item={item}/>
        ))
 
        }
      </div>
    </div>
  
    <Footer/>
   
   </div>
  )
}

export default App