import React from 'react'
import Destination from '../components/Destination'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Trip from '../components/Trip'

const Home = () => {
  return (
    <>
         <Hero cName="hero"  
         heroImage={"./img/damiano-baschiera-hFXZ5cNfkOk-unsplash.jpg"}
         title={"Your Journey Your Story"}
         text={"Choose Your Favourite Destination "} 
         buttonText={"Travel Plans"} 
         url="/"
         btnClass="show"
         />
     <Destination/>    
     <Trip
       
      />
      <Footer/>

    </>
   )
}

export default Home