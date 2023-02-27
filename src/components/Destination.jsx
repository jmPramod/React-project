import React from "react";
import DestinationData from "./DestinationData";
import "./destinationStyle.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destination</h1>
      <p>Tour gives you the opetunity </p>
      <DestinationData
      class1={"first-des-reverse"}
        img2={"./img/luca-bravo-O453M2Liufs-unsplash.jpg"}
        img1={"./img/dino-reichmuth-A5rCN8626Ck-unsplash (1).jpg"}
        heading={"Lorem ipsum dolor sit amet."}
        desc={
          "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, sapienterepellat dolore quae cumque cupiditate beatae tempore incidunt sinteum libero. Consectetur libero minus ullam! Qui corrupti enim et nemo."
        }
      />
      <DestinationData
      class1={"first-des"}
        img2={"./img/timo-stern-iUBgeNeyVy8-unsplash.jpg"}
        img1={"./img/rolands-varsbergs-miKmVyq3qhE-unsplash.jpg"}
        heading={"Lorem ipsum dolor sit amet."}
        desc={
          "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, sapienterepellat dolore quae cumque cupiditate beatae tempore incidunt sinteum libero. Consectetur libero minus ullam! Qui corrupti enim et nemo."
        }
      />
      
      
    </div>
  );
};

export default Destination;
