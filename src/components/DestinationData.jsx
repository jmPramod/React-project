import React from 'react'
import "./destinationStyle.css"
const DestinationData = ({desc,class1,heading,img1,img2}) => {
  return (
    <div className={class1}>
    <div className="des-text">
      <h2> {heading}</h2>
      <p>
        {desc}</p>
    </div>
     <div className="imageWrapper">
      <img src={img1}  alt="image" />
      <img src={img2} alt="" />

     </div>
    </div> )
}

export default DestinationData