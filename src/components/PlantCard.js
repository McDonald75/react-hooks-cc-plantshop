import React, { useState } from "react";

function PlantCard({plant}) {
  const [inStock, setinStock] = useState(true)
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={()=>{
          setinStock(false)
        }}>In Stock</button>
      ) : (
        <button onClick={()=>{
          setinStock(true)
        }}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
