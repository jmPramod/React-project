import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
const Contact = () => {
  return (
    <div>
   <Hero cName="hero-mid"  
    heroImage={"./img/ibrahim-rifath-Y6tBl0pTe-g-unsplash.jpg"}
    title={"Contact Me"}
    text={"Choose Your Favourite Destination "} 
    buttonText={"Travel Plans"} 
    url="/about"
    btnClass="hide"
    />

<Footer/>
    </div>
  )
}

export default Contact