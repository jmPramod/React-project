import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
const Service = () => {
  return (
    <div>
   <Hero cName="hero-mid"  
    heroImage={"./img/ljubomir-zarkovic-HW2JAY3OHgA-unsplash.jpg"}
    title={"Services"}
    text={"Services that are Provided "} 
    buttonText={"Travel Plans"} 
    url="/about"
    btnClass="hide"
    />
<Footer/>
    </div>
  )
}

export default Service