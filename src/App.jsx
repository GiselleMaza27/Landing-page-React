// import { Carousel } from 'bootstrap'
import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Tarjetas from '../components/Tarjetas'

const App = () => {
  return (
   <div>
    <Navbar/>
    <Carousel/>
    {/* <Tarjetas/> */}
    <Footer/>
   
   </div>
  )
}

export default App