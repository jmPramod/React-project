import React from 'react'
import "./trip.css"
import TripData from './TripData'
const Trip = () => {
  return (
    <div className='trip'>
        
        <h1>Recent Trip</h1>
        <p>you can Discover Unique destination using google map</p>
<div className="tripCard">
<TripData
  imgScr={"./img/sara-dubler-Koei_7yYtIo-unsplash.jpg"}
  heading={"Travel Trip Details"}
  desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores amet dolore ullam veritatis cum aperiam cupiditate quas quidem odio tempore ad explicabo provident necessitatibus quo culpa, labore ea qui omnis debitis quam consequatur iusto nesciunt deserunt? Dignissimos perferendis dolore iure voluptatibus quas veniam labore sunt nulla ex, dolorem quo?"}

/>
<TripData
  imgScr={"./img/shifaaz-shamoon-qtbV_8P_Ksk-unsplash.jpg"}
  heading={"Travel Trip Details"}
  desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores amet dolore ullam veritatis cum aperiam cupiditate quas quidem odio tempore ad explicabo provident necessitatibus quo culpa, labore ea qui omnis debitis quam consequatur iusto nesciunt deserunt? Dignissimos perferendis dolore iure voluptatibus quas veniam labore sunt nulla ex, dolorem quo?"}

/>
<TripData
  imgScr={"./img/roberto-nickson-HmieZw0YOC0-unsplash.jpg"}
  heading={"Travel Trip Details"}
  desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores amet dolore ullam veritatis cum aperiam cupiditate quas quidem odio tempore ad explicabo provident necessitatibus quo culpa, labore ea qui omnis debitis quam consequatur iusto nesciunt deserunt? Dignissimos perferendis dolore iure voluptatibus quas veniam labore sunt nulla ex, dolorem quo?"}

/>
</div>
    </div>
  )
}

export default Trip