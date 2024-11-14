import React, { useContext, useState } from "react";
import { Context } from "./context";

function PlantCard({plant}) {
  const {setRefresh} = useContext(Context)
  const [inStock, setinStock] = useState(true)
  const [update, setUpdate] = useState(false)
  const [price, setPrice] = useState(plant.price)


  const onUpdate  = (e)=>{
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price
      }),
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); 
    })
    .then(data => {
      setRefresh(true)
      setUpdate(false)
      alert(`plant ${plant.id} was updated!`)
    })
    .catch(error => {
      alert(error.message)
    });
  }
  
  const onDelete  = (e)=>{
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); 
    })
    .then(data => {
      setRefresh(true)
      setUpdate(false)
      alert(`plant ${plant.id} was deleted!`)
    })
    .catch(error => {
      alert(error.message)
    });
  }
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p><span>Price:</span> <input placeholder={plant.price} value = {price} style={{
        border:'none',
        display:'inline',
        width:'150px',
      }}
      type="number"
      onChange={(e)=>{
        setUpdate(true)
        setPrice(e.target.value)

      }}
      /></p>
      <button onClick={onDelete}>Delete</button>
      {inStock ? (
        <button className="primary" onClick={()=>{
          setinStock(false)
        }}>In Stock</button>
      ) : (
        <button onClick={()=>{
          setinStock(true)
        }}>Out of Stock</button>

      )}
      {update && 
      <button onClick={onUpdate}>update</button>}
    </li>
  );
}

export default PlantCard;
