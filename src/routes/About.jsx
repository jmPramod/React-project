import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
const About = () => {
  return (
    <>
    <Hero cName="hero-mid"  
    heroImage={"./img/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg"}
    title={"About"}
    text={"Choose Your Favourite Destination "} 
    buttonText={"Travel Plans"} 
    url="/about"
    btnClass="hide"
    />

<Footer/>
</>
  )
}

export default About